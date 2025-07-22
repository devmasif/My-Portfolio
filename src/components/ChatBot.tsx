import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, Send, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    if (!apiKey) {
      toast({
        title: 'Error',
        description: 'OpenAI API key is not set in environment variables.',
        variant: 'destructive',
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{
            role: "system",
            content: `🧠 You are a helpful and friendly assistant embedded in Muhammad Asif’s personal portfolio website: https://m-asif.up.railway.app/

✅ Use the following context to answer any questions users might have about Muhammad Asif, his skills, his projects, or how to contact him.

👨‍💻 Muhammad Asif

Student: B.S. Computer Science at FAST-NU Islamabad (2022–2026)

Interests: Backend development, full-stack web projects, and AI (LLMs)

Tech Skills:

Languages: C++, Python, JavaScript

Backend: FastAPI, MongoDB, JWT Auth

Tools: Hugging Face, Gradio

Concepts: Data Structures & Algorithms

Internship: Codeaza Technologies (Summer 2025) — worked on frontend, backend, and LLM-based tools

🧩 Featured Projects

2D SFML Game: Login system, multiplayer, leaderboard (min-heap), priority queue matchmaking, and AVL tree inventory system.

FastAPI + MongoDB Auth Backend: JWT authentication, user management, and inventory system.

Blog API: Full blog backend with login, likes, comments, and Swagger/Scalar docs.

PvZ OOP Game: Game made with C++ demonstrating inheritance and polymorphism.

✨ Services Offered

Custom backend APIs

Authentication systems

FastAPI + MongoDB apps

LLM integrations using Hugging Face + Gradio

📫 Contact Info

Email: m.ali83075@gmail.com

GitHub: github.com/devmasif

LinkedIn: linkedin.com/in/muhamd-asif

🔐 You do not have access to private data, files, internal backend, or external APIs.
If someone asks something out of scope (like editing files or accessing login data), politely say:
“I’m just a frontend assistant here to help explain the site and Muhammad Asif’s work. Feel free to reach out via the contact section!”

🧭 You can suggest the user to check specific sections of the website like:

Projects → For demos and GitHub links

About → For skills, experience, and education

Contact → To get in touch with Muhammad Asif`
          },

          ...messages.map(msg => ({
            role: msg.isUser ? 'user' : 'assistant',
            content: msg.text,
          })),
          {
            role: 'user',
            content: inputValue,
          },
          ],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || 'Failed to get response from OpenAI');
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.choices?.[0]?.message?.content || 'No response generated.',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error: any) {
      console.error('OpenAI error:', error);
      toast({
        title: 'OpenAI Error',
        description: error.message || 'Something went wrong.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-12 h-12 glow-button"
          size="icon"
        >
          <MessageCircle size={24} />
        </Button>
      ) : (
        <Card className="w-80 h-96 flex flex-col bg-background/95 backdrop-blur border-primary/20">
          <div className="flex items-center justify-between p-4 border-b border-primary/20">
            <h3 className="font-semibold text-primary">AI Assistant</h3>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X size={16} />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1 p-4">
            <div className="space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm">
                  Start a conversation with the AI assistant!
                </div>
              )}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground p-2 rounded-lg text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div className="p-3 border-t border-primary/20">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading || !apiKey}
                className="flex-1"
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !inputValue.trim() || !apiKey}
                size="icon"
              >
                <Send size={16} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatBot;
