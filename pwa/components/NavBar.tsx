"use client";
import { Card, CardContent } from "@/components/ui/card";
import { File, Image, Video } from "lucide-react";
import NavBarButton from "./buttons/NavBarButton";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userDetailsAtom } from "@/state/user/userDetails";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { sideSheetOpenAtom } from "@/state/storage/sideSheetOpenAtom";

export default function NavBar() {
  const [selectedBtn, setSelectedBtn] = useState(
    window.location.pathname.split("/")[3] || "storage"
  );
  const [, setUserDetails] = useAtom(userDetailsAtom);
  const router = useRouter();
  const [, setSheetOpen] = useAtom(sideSheetOpenAtom);

  const isLargeScreen = window.innerWidth > 1024;

  useEffect(() => {
    const handlePathChange = () => {
      // Logic to handle URL path change
      setSelectedBtn(window.location.pathname.split("/")[3] || "storage");
    };

    // Add event listener for 'popstate' event
    window.addEventListener("popstate", handlePathChange);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("popstate", handlePathChange);
    };
  }, []);

  return (
    <motion.div
      // initial={isLargeScreen ? { opacity: 0, x: -500, scale: 0.5 } : {}}
      // animate={{ opacity: 1, x: 0, scale: 1 }}
      // transition={
      //   isLargeScreen
      //     ? {
      //         duration: 1,
      //         delay: 0.2,
      //         ease: [0, 0.71, 0.2, 1.01],
      //       }
      //     : {}
      // }
      className="w-full rounded-lg"
    >
      <Card className="">
        <CardContent className="p-3">
          <div className="flex flex-col items-center w-full gap-2">
            <NavBarButton
              icon={<File />}
              name="Files"
              selected={selectedBtn === "storage"}
              setSelected={setSelectedBtn}
              href="/home/storage"
            />

            <NavBarButton
              icon={<Image />}
              name="Images"
              selected={selectedBtn === "images"}
              setSelected={setSelectedBtn}
              href="/home/storage/images"
            />

            <NavBarButton
              icon={<Video />}
              name="Videos"
              selected={selectedBtn === "videos"}
              setSelected={setSelectedBtn}
              href="/home/storage/videos"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
