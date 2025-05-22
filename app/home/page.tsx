"use client";

import { useChat } from "ai/react";
import { ChatSection } from "@llamaindex/chat-ui";

export default function Page(): JSX.Element {
  const handler = useChat();
  return (
    <div className="flex gap-10">
      <div className="hidden w-1/3 justify-center space-y-10 self-center p-10 md:block">
        <h1 className="bg-gradient-to-r from-[#000] to-[#b5f2fd] bg-clip-text text-6xl font-bold text-transparent">
          Emsteel
        </h1>
      </div>
      <div className="w-full md:w-2/3 md:border-l">
        <ChatSection
          handler={handler}
          className="mx-auto h-screen max-w-3xl overflow-hidden p-0 md:p-5"
        />
      </div>
    </div>
  );
}
