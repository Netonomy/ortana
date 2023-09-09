import { atom } from "jotai";

export const messagesAtom = atom<{ type: "ai" | "human"; message: string }[]>(
  []
);
