"use client";

import NavBar from "@/components/myComponents/NavBar";
import Avatar from "@mui/material/Avatar";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  content: string;
  sender: "me" | "other";
};

type Conversation = {
  id: number;
  name: string;
  messages: Message[];
};

const mockConversations: Conversation[] = [
  {
    id: 1,
    name: "John Doe",
    messages: [
      { id: 1, content: "Hey!", sender: "other" },
      { id: 2, content: "How are you?", sender: "other" },
      { id: 3, content: "I'm good, thanks!", sender: "me" },
      { id: 4, content: "What about you?", sender: "me" },
    ],
  },
  {
    id: 2,
    name: "Sarah",
    messages: [{ id: 1, content: "Hello 👋", sender: "other" }],
  },
];

export default function ChatPage() {
  const [conversations, setConversations] =
    useState<Conversation[]>(mockConversations);
  const [activeConvId, setActiveConvId] = useState<number>(1);
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const activeConversation = conversations.find((c) => c.id === activeConvId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConvId, activeConversation?.messages.length]);

  const sendMessage = () => {
    if (!message.trim() || !activeConversation) return;

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === activeConvId
          ? {
              ...conv,
              messages: [
                ...conv.messages,
                {
                  id: Date.now(),
                  content: message,
                  sender: "me",
                },
              ],
            }
          : conv,
      ),
    );

    setMessage("");
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r flex flex-col">
          <h2 className="px-4 py-3 font-semibold text-lg border-b">Chats</h2>

          <ul className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <li
                key={conv.id}
                onClick={() => setActiveConvId(conv.id)}
                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition ${
                  conv.id === activeConvId
                    ? "bg-blue-50 border-l-4 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <Avatar className="bg-blue-500 text-white">
                  {conv.name.charAt(0)}
                </Avatar>

                <div className="flex flex-col min-w-0">
                  <span className="font-medium">{conv.name}</span>
                  <span className="text-sm text-gray-500 truncate">
                    {conv.messages.at(-1)?.content}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col bg-gray-50">
          <header className="p-4 bg-white border-b flex items-center gap-3 shadow-sm">
            <Avatar className="bg-blue-500 text-white">
              {activeConversation?.name.charAt(0)}
            </Avatar>

            <div className="flex flex-col">
              <span className="font-semibold">{activeConversation?.name}</span>
              <span className="text-xs text-gray-500">Active now</span>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-1">
            {activeConversation?.messages.map((msg, index) => {
              const prevMessage = activeConversation.messages[index - 1];
              const nextMessage = activeConversation.messages[index + 1];

              const isFirst = prevMessage?.sender !== msg.sender;
              const isLast = nextMessage?.sender !== msg.sender;

              const showAvatar = msg.sender === "other" && isFirst;

              const bubbleRadius =
                msg.sender === "me"
                  ? `
                      ${isFirst ? "rounded-tr-2xl" : "rounded-tr-sm"}
                      ${isLast ? "rounded-br-2xl" : "rounded-br-sm"}
                      rounded-tl-2xl rounded-bl-2xl
                    `
                  : `
                      ${isFirst ? "rounded-tl-2xl" : "rounded-tl-sm"}
                      ${isLast ? "rounded-bl-2xl" : "rounded-bl-sm"}
                      rounded-tr-2xl rounded-br-2xl
                    `;

              return (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  {showAvatar ? (
                    <Avatar className="w-8 h-8 mr-2 bg-gray-400 text-white">
                      {activeConversation.name.charAt(0)}
                    </Avatar>
                  ) : (
                    msg.sender === "other" && <div className="w-8 mr-2" />
                  )}

                  <div
                    className={`
                      px-4 py-2 max-w-md text-sm shadow
                      ${bubbleRadius}
                      ${
                        msg.sender === "me"
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-800"
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              );
            })}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t flex gap-3">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 rounded-full border px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 transition text-white w-12 h-12 rounded-full flex items-center justify-center shadow"
            >
              <Send size={18} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
