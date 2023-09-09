import { NextApiRequest, NextApiResponse } from "next";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { NextRequest, NextResponse } from "next/server";

// export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const data = await request.formData();

  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const loader = new PDFLoader(file);
  const docs = await loader.load();

  return NextResponse.json({ docs });
}
