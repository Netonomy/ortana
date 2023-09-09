import { Router } from "express";
import multer from "multer";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import pineconeIndex from "../../../config/pineconeIndex.js";

const upload = multer({ dest: "files/" });

/**
 * @swagger
 * /api/pinecone/index:
 *   post:
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 required: true
 *               recordId:
 *                 type: string
 *                 required: true
 *               did:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: OK
 *     tags:
 *       - Pinecone
 */
export default Router({ mergeParams: true }).post(
  "/pinecone/index",
  upload.single("file"), // Middleware for handling multipart/form-data, which is primarily used for uploading files
  async (req, res) => {
    try {
      const file = req.file; // Extracting file from the request

      // If no file is found in the request, return a 400 status code with a message
      if (!file) return res.status(400).json({ message: "No file" });

      // Extracting 'did' and 'recordId' from the request body
      const { did, recordId } = req.body;

      // If the file is a PDF, proceed with the following operations
      if (file.mimetype === "application/pdf") {
        // Create a new instance of PDFLoader with the file path
        const loader = new PDFLoader(file.path);

        // Load the documents from the PDF file
        const docs = await loader.load();

        // Map through the documents and add metadata to each document
        const docsWithMetadata = docs.map((doc) => {
          doc.metadata = { did, recordId };
          return doc;
        });

        // Store the documents with metadata in PineconeStore
        await PineconeStore.fromDocuments(
          docsWithMetadata,
          new OpenAIEmbeddings(), // Use OpenAIEmbeddings for vector embeddings
          {
            pineconeIndex, // Specify the Pinecone index
          }
        );

        // If everything is successful, return a success message
        return res.json({
          status: "SUCCESS",
          message: "Uploaded docs to pinecone",
        });
      } else {
        // If the file is not a PDF, return a 400 status code with a message
        return res.status(400).json({
          status: "FAILED",
          message: `Unable to index mimetype of: ${req.file?.mimetype}`,
        });
      }
    } catch (err) {
      // If there's an error, return a 400 status code with the error message
      return res.status(400).json({
        status: "FAILED",
        message: (err as any).message,
      });
    }
  }
);
