import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Message {
  id: string
  role: 'user' | 'ai'
  text: string
}

const initialMessages: Message[] = [
  { id: '1', role: 'ai', text: "Hi Sneha! I'm your AI Mentor. Ask me anything about anatomy, physiology, or any topic you're studying." },
]

export default function AiMentor() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')

  function handleSend() {
    if (!input.trim()) return
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'ai', text: "That's a great question — this is a placeholder response. AI wiring will connect here in a future sprint." },
      ])
    }, 700)
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white">
          <Brain className="h-5.5 w-5.5" />
        </div>
        <div>
          <h1 className="font-heading text-xl font-bold text-secondary-900">AI Mentor</h1>
          <p className="text-xs text-secondary-500 flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-primary-500" /> Online and ready to help
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto rounded-2xl bg-white/50 p-4 scrollbar-hide">
        {messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                m.role === 'user'
                  ? 'bg-primary-500 text-white rounded-br-sm'
                  : 'bg-white text-secondary-800 shadow-soft rounded-bl-sm'
              }`}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask your AI Mentor anything..."
          className="h-12 flex-1 rounded-xl border border-secondary-200 bg-white px-4 text-sm focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10"
        />
        <Button size="icon" onClick={handleSend} aria-label="Send message">
          <Send className="h-4.5 w-4.5" />
        </Button>
      </div>
    </div>
  )
}
