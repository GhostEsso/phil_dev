"use client"

import { motion } from "framer-motion"

interface HighlightedTextProps {
  text: string
  color: string
  delay: number
}

export function HighlightedText({ text, color, delay }: HighlightedTextProps) {
  return (
    <div className="relative inline-block w-fit group">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.21, 0.47, 0.32, 0.98] 
        }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white relative z-10 leading-tight tracking-tight inline-block"
      >
        {text}
      </motion.span>
      
      {/* Maximum Thickness Felt-tip/Marker style highlight */}
      <motion.div
        initial={{ width: 0, opacity: 0, scaleY: 0.4 }}
        whileInView={{ width: "100%", opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 3, // Very deliberate tracing
          delay: delay + 0.6,
          ease: [0.16, 1, 0.3, 1]
        }}
        className={`absolute bottom-0 left-0 h-[105%] ${color} mix-blend-multiply dark:mix-blend-screen opacity-55 dark:opacity-45 z-0 transform -rotate-1 blur-[0.6px] origin-left`}
        style={{
          borderRadius: "15% 85% 25% 75% / 75% 25% 85% 15%" // Even more irregular and broad
        }}
      />
      
      {/* Extra Bold Base stroke for total coverage */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "103%", opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 3.5,
          delay: delay + 0.9,
          ease: "easeOut"
        }}
        className={`absolute bottom-[10%] -left-2 h-[80%] ${color} mix-blend-multiply dark:mix-blend-screen z-0 blur-[2px] origin-left`}
        style={{
          borderRadius: "40% 60% 50% 50% / 50% 50% 50% 50%"
        }}
      />
    </div>
  )
}