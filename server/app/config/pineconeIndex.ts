import { PineconeClient } from "@pinecone-database/pinecone";

const client = new PineconeClient();
await client.init({
  environment: process.env.PINECONE_ENV!,
  apiKey: process.env.PINECONE_KEY!,
});

const pineconeIndex = client.Index(process.env.PINECONE_INDEX!);

export default pineconeIndex;
