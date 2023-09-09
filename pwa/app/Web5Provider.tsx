"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { Web5 } from "@web5/api";

export const Web5Context = createContext<{ web5: Web5; did: string } | null>(
  null
);

export default function Web5Provider({ children }: { children: ReactNode }) {
  const [web5, setWeb5] = useState<{ web5: Web5; did: string } | null>(null);

  async function connect() {
    const { web5, did } = await Web5.connect();

    setWeb5({ web5, did });
  }

  useEffect(() => {
    connect();
  }, []);

  return <Web5Context.Provider value={web5}>{children}</Web5Context.Provider>;
}
