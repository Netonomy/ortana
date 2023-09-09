"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const tagLines = [
    "Chat with your data",
    "AI Assistants for employees",
    "Analyze documents",
    "Control access",
    "Secure and private",
    "Manage Autonomous AI agents",
    "Decentralized Web Nodes",
    "Decentralized Identity",
    "Verifable Credentials",
  ];

  const [currentTagLine, setCurrentTagLine] = useState(tagLines[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagLine(
        tagLines[(tagLines.indexOf(currentTagLine) + 1) % tagLines.length]
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [currentTagLine]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center border-[10px] border-primary">
      {/** Body */}
      <div className="flex flex-col items-center mb-[80px]">
        {/** Big Header Section */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="p-2 bg-zinc-200 dark:bg-zinc-900 rounded font-bold">
              Introducing
            </div>
            <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl">
              🧠 Ortana
            </h1>
          </motion.div>

          {/** Sub Header */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xl text-muted-foreground">
              Next Generation Platform for Business
            </p>

            <p className="text-sm text-muted-foreground">
              Put your business on autopilot
            </p>
          </motion.div>
        </div>

        {/** Tag lines */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="my-12"
        >
          <motion.div
            key={currentTagLine}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 2, type: "spring", stiffness: 50 }}
          >
            <h3 className="scroll-m-20 text-4xl font-semibold tracking-tight">
              {currentTagLine}
            </h3>
          </motion.div>
        </motion.div>

        {/** Call to Action Buttons */}

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button className="shadow-2xl drop-shadow-2xl" size={"lg"}>
            Sign Up
          </Button>

          <Button
            className="shadow-2xl drop-shadow-2xl"
            size={"lg"}
            variant={"secondary"}
          >
            Login
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
