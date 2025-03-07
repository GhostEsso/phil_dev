"use client"

import { motion } from "framer-motion"

interface HighlightedTextProps {
  text: string
  color: string
  delay: number
}

export function HighlightedText({ text, color, delay }: HighlightedTextProps) {
  return (
    <div className="relative inline-block">
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: delay }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white block"
      >
        {text}
      </motion.span>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 1.5,
          delay: delay + 0.8,
          ease: "easeInOut"
        }}
        className={`absolute bottom-0 left-0 h-[30%] ${color} opacity-30 -z-10`}
      />
    </div>
  )
} 