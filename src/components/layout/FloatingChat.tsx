"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to Toy House. How can we assist you with our toys and baby products today?",
    },
  ]);
  const [input, setInput] = useState("");
  const { showToast } = useCart();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for reaching out! An agent is connecting, or feel free to call our hotline at +880 1800-TOYHOUSE for instant order assistance.",
        },
      ]);
      showToast("Live support received your message");
    }, 800);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50">
      {/* Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[400px] animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#FF5B00] text-white p-3.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold">Toy House Support</h4>
                <span className="text-[10px] text-orange-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2.5 text-xs bg-gray-50/50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-2.5 rounded-xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#FF5B00] text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200/80 shadow-2xs rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about toys..."
              className="flex-1 px-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#FF5B00]"
            />
            <button
              type="submit"
              className="p-2 bg-[#FF5B00] hover:bg-[#E64E00] text-white rounded-lg transition-colors flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Orange Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Live Customer Chat"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#FF5B00] hover:bg-[#E64E00] text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-200"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" />
        ) : (
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 stroke-[2.5]" />
        )}
      </button>
    </div>
  );
};
