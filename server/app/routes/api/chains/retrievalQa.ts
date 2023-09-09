import { Router } from "express";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import pineconeIndex from "../../../config/pineconeIndex.js";
import { OpenAI } from "langchain/llms/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { HumanMessage, AIMessage } from "langchain/schema";

/**
 * @swagger
 * /api/chains/retrievalQa:
 *   post:
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               messages:
 *                 type: array
 *                 items:
 *                   type: object
 *                 required: true
 *               did:
 *                 type: string
 *                 required: true
 *               recordId:
 *                 type: string
 *                 required: true
 *     responses:
 *       200:
 *         description: OK
 *     tags:
 *       - Chains
 */
export default Router({ mergeParams: true }).post(
  "/chains/retrievalQa",
  async (req, res) => {
    try {
      const { did, recordId } = req.body;

      const messages = req.body.messages ?? [];
      const question = messages.at(-1).content;

      const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex }
      );

      // Initialize the LLM to use to answer the question.
      const model = new OpenAI({
        modelName: "gpt-4",
        streaming: true,
        temperature: 0,
        callbacks: [
          {
            handleLLMNewToken(token: string) {
              res.write(token);
            },

            handleLLMEnd() {
              res.end();
            },
          },
        ],
      });
      // Initialize a non-streaming model
      const nonStreamingModel = new OpenAI({
        temperature: 0,
      });

      /* Create the chain */
      // Create a ConversationalRetrievalQAChain instance using the LLM model, vector store, and additional options
      const chain = ConversationalRetrievalQAChain.fromLLM(
        model,
        vectorStore.asRetriever({ metadata: { did, recordId } }), // Use the vector store as a retriever with the provided metadata
        {
          // Define the memory for the chain
          memory: new BufferMemory({
            memoryKey: "chat_history", // Must be set to "chat_history"
            // Create a chat history from the messages, excluding the last one
            chatHistory: new ChatMessageHistory(
              messages.slice(0, -1).map(
                // Map each message to a HumanMessage or AIMessage based on the role
                (message: { content: string; role: string; id: string }) => {
                  if (message.role === "user")
                    return new HumanMessage({ content: message.content });
                  else return new AIMessage({ content: message.content });
                }
              )
            ),
            inputKey: "question", // The key for the input data
            outputKey: "text", // The key for the output data
            returnMessages: true, // Whether to return the messages in the output
          }),
          // Define the options for the question generator chain
          questionGeneratorChainOptions: {
            llm: nonStreamingModel, // Use the non-streaming model for the question generator chain
          },
        }
      );

      /* Ask it a question */
      chain.call({ question });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        status: "FAILED",
        message: (err as any).message,
      });
    }
  }
);
