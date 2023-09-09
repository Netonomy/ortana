import { atom } from "jotai";
import * as webllm from "@mlc-ai/web-llm";

export const aiChatAtom = atom<null | webllm.ChatWorkerClient>(null);
