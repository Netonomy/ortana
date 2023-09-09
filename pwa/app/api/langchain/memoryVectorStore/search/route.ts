// Importing necessary modules
import { NextRequest, NextResponse } from "next/server";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

// Defining the POST function
export async function POST(request: NextRequest) {
  // Parsing the request data
  const data = await request.json();

  // Destructuring the data to get docs and search
  const { docs, search } = data;

  // Load the docs into the vector store
  // Using MemoryVectorStore and OpenAIEmbeddings
  const vectorStore = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );

  // Search for the most similar documents
  // Limiting the results to top 3
  const results = await vectorStore.similaritySearch(search, 3);

  // Return the results as a JSON response
  return NextResponse.json({ results });
}
