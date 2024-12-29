"use client"

import { motion } from "framer-motion"

interface HighlightedTextProps {
  text: string
  color: string
  delay: number
}

export function HighlightedText({ text, color, delay }: HighlightedTextProps) {
  return (
    <div className="mb-6">
      <motion.div
        className={`${color} inline-block`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: "easeOut"
        }}
        style={{ transformOrigin: "left" }}
      >
        <motion.span
          className="font-bold text-6xl md:text-8xl text-white px-4 py-1 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + 0.4
          }}
        >
          {text}
        </motion.span>
      </motion.div>
    </div>
  )
} 