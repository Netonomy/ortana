import { ChatRequestOptions, Message } from "ai";
import { Document } from "langchain/document";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useChat } from "ai/react";
import { v4 as uuidv4 } from "uuid";
import { Web5Context } from "@/app/Web5Provider";

export default function useChatWithDoc(file?: Blob, recordId?: string) {
  if (file) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const web5Context = useContext(Web5Context);

    const handleInputChange = (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ) => {
      setInput(e.target.value);
    };

    const handleSubmit = (
      e: FormEvent<HTMLFormElement>,
      chatRequestOptions?: ChatRequestOptions | undefined
    ) => {
      e.preventDefault();
      e.stopPropagation();

      // Update messages array to have users input
      const newMessages: Message[] = [
        ...messages,
        {
          role: "user",
          content: input,
          id: uuidv4(),
        },
      ];
      setMessages(newMessages);

      // Reset input
      setInput("");

      // Update messages array to have empty ai message
      const messagesWithEmptyAiMsg: Message[] = [
        ...newMessages,
        {
          role: "assistant",
          content: "",
          id: uuidv4(),
        },
      ];
      setMessages(messagesWithEmptyAiMsg);

      fetch(`${process.env.NEXT_PUBLIC_SERVER_API_URL}chains/retrievalQa`, {
        method: "POST",
        body: JSON.stringify({
          messages: newMessages,
          did: web5Context?.did,
          recordId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          const reader = response.body?.getReader();

          if (reader) {
            try {
              while (true) {
                const { done, value } = await reader.read();

                if (done) {
                  break;
                }

                if (value) {
                  const chunk = new TextDecoder().decode(value);

                  // Update AI message with new tokens
                  setMessages((prevMessages) => {
                    let updatedMessages = [...prevMessages];
                    let lastMessage =
                      updatedMessages[updatedMessages.length - 1];
                    lastMessage.content += chunk;
                    return updatedMessages;
                  });
                }
              }
            } catch (err) {
              console.error(`Unable to read chunk `);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };

    return {
      input,
      setInput,
      messages,
      setMessages,
      handleInputChange,
      handleSubmit,
    };
  } else {
    const {
      input,
      setInput,
      messages,
      setMessages,
      handleInputChange,
      handleSubmit,
    } = useChat();

    return {
      input,
      setInput,
      messages,
      setMessages,
      handleInputChange,
      handleSubmit,
    };
  }
}
