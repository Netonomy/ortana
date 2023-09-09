"use client";
import AiChat from "@/app/agent/AiChat";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function AiSideCard({
  blob,
  recordId,
}: {
  blob?: Blob;
  recordId?: string;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey && event.key === "k") {
        setVisible((prevVisible) => !prevVisible);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {visible && (
        <div className="hidden lg:flex flex-grow  h-full items-start max-w-[450px]  max-h-[calc(100vh-40px)] transition-all ease-in-out">
          <Card className="w-full h-full overflow-hidden">
            <CardContent className="h-full w-full flex p-0">
              <AiChat blob={blob} showBackBtn={false} recordId={recordId} />
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
