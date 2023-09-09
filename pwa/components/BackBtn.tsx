"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function BackBtn(props: { path?: string }) {
  const router = useRouter();

  return (
    <Button
      className="m-4 w-10 rounded-full p-0"
      variant={"ghost"}
      onClick={() => {
        if (props.path) {
          router.push(props.path);
        } else {
          router.back();
        }
      }}
    >
      <ArrowLeft />
    </Button>
  );
}
