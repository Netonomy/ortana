"use client";
import Image from "next/image";
import { Button } from "./ui/button";

export default function FinanceRequestAndPayButtons() {
  return (
    <div className="flex items-center justify-around h-10 w-full gap-2 p-2 lg:p-4 lg:gap-4">
      <Button
        className="flex flex-1 lg:font-normal lg:text-2xl dark:bg-[#1d1d1d] dark:text-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Request
      </Button>
      {/* <Button className="flex flex-2 dark:bg-[#1d1d1d]">
        <Image
          src={"/barCodeIcon.svg"}
          height={27}
          width={24}
          alt="bar code image"
        />
      </Button> */}
      <Button
        className="flex flex-1 lg:font-normal lg:text-2xl dark:bg-[#1d1d1d] dark:text-white"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        Pay
      </Button>
    </div>
  );
}
