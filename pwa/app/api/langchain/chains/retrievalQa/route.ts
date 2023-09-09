import { NextRequest, NextResponse } from "next/server";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { LangChainStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

export async function POST(request: NextRequest) {
  try {
    // Parsing the request data
    const data = await request.json();

    const messages = data.messages ?? [];
    const question = messages.at(-1).content;

    const { stream, handlers } = LangChainStream();

    // Destructuring the data to get docs and search
    const { docs } = data;

    // Load the docs into the vector store
    // Using MemoryVectorStore and OpenAIEmbeddings
    const vectorStore = await MemoryVectorStore.fromDocuments(
      docs,
      new OpenAIEmbeddings()
    );

    // Initialize the LLM to use to answer the question.
    const model = new OpenAI({
      modelName: "gpt-4",
      streaming: true,
      temperature: 0,
    });

    /* Create the chain */
    const chain = ConversationalRetrievalQAChain.fromLLM(
      model,
      vectorStore.asRetriever(),
      {
        memory: new BufferMemory({
          memoryKey: "chat_history", // Must be set to "chat_history"
          chatHistory: new ChatMessageHistory([]),
          inputKey: "question",
          outputKey: "text",
          // returnMessages: false,
        }),
      }
    );

    /* Ask it a question */
    chain.call({ question }, { callbacks: [handlers] });

    return new StreamingTextResponse(stream);
  } catch (err) {
    return NextResponse.error();
  }
}
