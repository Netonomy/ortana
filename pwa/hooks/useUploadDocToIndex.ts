export default function useUploadDocToIndex() {
  const uploadDocsToIndex = async (
    file: Blob,
    did: string,
    recordId: string
  ) => {
    const data = new FormData();
    data.set("file", file);
    data.set("did", did!);
    data.set("recordId", recordId);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API_URL}pinecone/index`,
      {
        method: "POST",
        body: data,
      }
    );

    // Handle the error
    if (!res.ok) throw new Error(await res.text());
  };

  return uploadDocsToIndex;
}
