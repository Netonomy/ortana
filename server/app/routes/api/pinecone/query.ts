import { Router } from "express";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import pineconeIndex from "../../../config/pineconeIndex.js";

/**
 * @swagger
 * /api/pinecone/query:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recordId:
 *                 type: string
 *                 required: true
 *               did:
 *                 type: string
 *                 required: true
 *               query:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: OK
 *     tags:
 *       - Pinecone
 */
export default Router({ mergeParams: true }).post(
  "/pinecone/query",
  async (req, res) => {
    try {
      const { did, recordId, query } = req.body;

      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex }
      );

      /* Search the vector DB independently with meta filters */
      const results = await vectorStore.similaritySearch(query, 3, {
        recordId,
        did,
      });

      return res.json(results);
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        status: "FAILED",
        message: (err as any).message,
      });
    }
  }
);
