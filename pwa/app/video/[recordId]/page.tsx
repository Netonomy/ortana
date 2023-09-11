"use client";
import { Web5Context } from "@/app/Web5Provider";
import MyRingLoader from "@/components/MyRingLoader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  params,
}: {
  params: { recordId: string };
}) {
  const router = useRouter();
  const web5Context = useContext(Web5Context);
  const [video, setVideo] = useState<Blob | null>(null);

  async function fetchVideo() {
    if (web5Context) {
      //   If video is already in the cache use that
      //   if (videoCache[params.recordId]) {
      //     setVideo(videoCache[params.recordId]);
      //     return;
      //   }

      // Fetch thumbnail
      const videoRes = await web5Context.web5.dwn.records.read({
        message: {
          recordId: params.recordId,
        },
      });

      if (videoRes.record) {
        const blob = await videoRes.record.data.blob();

        setVideo(blob);

        // videoCache[params.recordId] = blob;
      }
    }
  }

  useEffect(() => {
    fetchVideo();
  }, [web5Context]);

  return (
    <Card className="flex flex-1 w-full overflow-hidden">
      <CardContent className="w-full h-full overflow-y-auto flex flex-col p-0 relative">
        {/* <Button
            className="absolute top-0 right-0 m-4 w-10 rounded-full p-0 z-30"
            onClick={() => {
              router.back();
            }}
          >
            <X />
          </Button> */}

        {video ? (
          <ReactPlayer
            url={URL.createObjectURL(video)}
            height={"100%"}
            width={"100%"}
            controls
          />
        ) : (
          <MyRingLoader />
        )}
      </CardContent>
    </Card>
  );
}
