"use client";
import { PlusIcon, SendIcon } from "lucide-react";
import { Fragment, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import BackBtn from "@/components/BackBtn";
import useChatWithDoc from "@/hooks/ai/useChatWithDoc";

export default function AiChat({
  showBackBtn = true,
  blob,
  recordId,
}: {
  showBackBtn?: boolean;
  blob?: Blob;
  recordId?: string;
}) {
  const {
    handleInputChange,
    handleSubmit,
    input,
    messages,
    setMessages,
    setInput,
  } = useChatWithDoc(blob, recordId);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      const caretPosition = event.target.selectionStart;
      const textBeforeCaret = input.substring(0, caretPosition);
      const textAfterCaret = input.substring(caretPosition);
      if (setInput) {
        setInput(textBeforeCaret + "\n" + textAfterCaret);
      }
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (buttonRef.current) buttonRef.current.click();
    }
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "24px";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [input]);

  function resetChat() {
    setMessages(
      blob
        ? []
        : [
            {
              role: "system",
              content: `Welcome to Portal by Netonmoy! As your AI Assistant, I'm here to help you navigate your digital world securely and effortlessly. With Portal, your data is stored in your own decentralized web node, putting you in full control of your digital identity through decentralized identifiers. 
    Whether you'd like to view, update, or gain insights into your data, I'm your go-to copilot. Let's embark on this journey of digital empowerment together!`,
              id: "netonomy-ai-sys-msg",
            },
          ]
    );
  }

  useEffect(() => {
    resetChat();
  }, []);

  return (
    <div className="relative flex flex-col items-center flex-1 w-full max-h-screen">
      {/** Header */}
      <div className="absolute top-0 left-0 right-0 h-[55px] z-40 backdrop-blur-xl bg-[#fafafa]/30 dark:bg-[#0a0a0a]/30 ">
        <div className="h-full w-full flex items-center justify-between p-6">
          <div className="w-[10%]">{showBackBtn && <BackBtn />}</div>

          <div className="flex items-center gap-2 w-[80%] justify-center relative ">
            {messages.length > 1 && (
              <>
                <Image
                  src={"/images/agent-ring.svg"}
                  height={45}
                  width={45}
                  alt="Ai Agent ring"
                  className="absolute"
                />

                <Image
                  src={"/images/agent.svg"}
                  height={45}
                  width={45}
                  alt="Ai Agent ring"
                  className="absolute"
                />
              </>
            )}
          </div>

          <div className="w-[10%]">
            {messages.length > 1 && (
              <Button
                onClick={async () => {
                  resetChat();
                }}
                size={"sm"}
                variant={"ghost"}
                className="rounded-full p-2"
              >
                <PlusIcon />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/** Info Message when chat is empty */}
      {(messages.length === 1 || messages.length === 0) && (
        <div className="absolute flex flex-col items-center gap-4 w-[95%] p-4 justify-center h-[80%] max-w-[450px] z-30">
          <div className="flex flex-col gap-4 items-center">
            <Image
              src={"/images/agent-ring.svg"}
              height={145}
              width={145}
              alt="Ai Agent ring"
              className="absolute"
            />

            <Image
              src={"/images/agent.svg"}
              height={145}
              width={145}
              alt="Ai Agent ring"
            />

            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">
              Chat with your Copilot
            </h3>

            <p className="text-sm text-muted-foreground text-center">
              Begin typing to ask questions, gain insights, or simply chat.
              Remember, the clearer your questions, the better the responses.
            </p>
          </div>
        </div>
      )}

      {/** Messages List */}
      <div className="flex flex-1 flex-col items-center w-full max-w-[1000px] relative overflow-y-auto">
        <div className="flex flex-1 flex-col items-center w-full max-w-[1000px] relative overflow-y-auto">
          <div className="h-full w-full p-4 flex overflow-y-auto flex-col-reverse z-30 pt-[60px]">
            {messages
              .slice()
              .reverse()
              .map((message, i) => (
                <Fragment key={i}>
                  {message.role === "user" && (
                    <div
                      className={`my-2 p-3 rounded-xl inline-block bg-blue-500 text-white ml-auto whitespace-pre-wrap`}
                    >
                      {message.content}
                    </div>
                  )}
                  {message.role === "assistant" && (
                    <div
                      className={`my-2 p-3 rounded-2xl inline-block bg-[#f1f5f9] text-black mr-auto whitespace-pre-wrap`}
                    >
                      {message.content}
                    </div>
                  )}
                </Fragment>
              ))}
          </div>
        </div>
      </div>

      {/** Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center relative h-auto p-2 w-full gap-2 border-t-[1.5px]  max-w-[1000px] z-20"
      >
        <Textarea
          ref={textAreaRef}
          value={input}
          contentEditable
          role="textbox"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Send a message..."
          className="min-h-[50px] h-10 max-h-[250px] pt-[12px] mr-[47px] resize-none w-full text-md bg-secondary text-primary box-border "
        />

        <Button
          size="icon"
          className="p-2 absolute bottom-3 right-2"
          type="submit"
          ref={buttonRef}
        >
          <SendIcon className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
