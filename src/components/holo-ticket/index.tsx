"use client"

import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TicketFront } from './ticket-front'
import { TicketBack } from './ticket-back'
import { useLanguage } from '@/hooks/useLanguage'

/**
 * HoloTicket Component - Revised (Soft & Minimalist Edition)
 * A gentle, elegant interaction with subtle pearlescent highlights.
 */
export const HoloTicket = () => {
  const { translations } = useLanguage();

  const [isFlipped, setIsFlipped] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Calmer spring physics for a "heavier", more luxurious feel
  const springConfig = { damping: 30, stiffness: 80, mass: 1 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig)

  // Glare position
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [20, 80]), springConfig)
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [20, 80]), springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      className="flex flex-col items-center justify-center p-4"
      style={{ perspective: '2000px' }}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          width: '320px',
          height: '460px',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          cursor: 'pointer'
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 60 }}
        className="relative shadow-xl"
      >
        {/* Soft Shadow Layer */}
        <div className="absolute inset-0 bg-black/5 dark:bg-black/20 blur-2xl translate-y-4 scale-95 -z-10" />

        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-white dark:bg-gray-950 shadow-sm border border-gray-100 dark:border-gray-800"
          style={{ zIndex: isFlipped ? 0 : 1 }}
        >
          <TicketFront userName="Essohanam Tambana" />
          
          {/* Subtle Pearlescent Glare (instead of full rainbow) */}
          <motion.div 
            className="absolute inset-0 pointer-events-none mix-blend-soft-light z-20"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]: any[]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`
              )
            }}
          />
          
          {/* Very faint iridescent sweep */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-[0.05] z-10"
            style={{
              background: 'linear-gradient(45deg, #ff00ea, #00e1ff, #ffea00, #ff00ea)',
              backgroundSize: '400% 400%',
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 shadow-sm text-black dark:text-white"
          style={{ rotateY: 180, zIndex: isFlipped ? 1 : 0 }}
        >
          <TicketBack />
          
          <motion.div 
            className="absolute inset-0 pointer-events-none mix-blend-soft-light z-20"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]: any[]) => `radial-gradient(circle at ${100-gx}% ${100-gy}%, rgba(255, 255, 255, 0.3) 0%, transparent 60%)`
              )
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Help tooltip - simplified */}
      <div className="mt-12 text-[9px] font-bold text-gray-400 uppercase tracking-widest opacity-40">
         {translations.ticket.clickToRotate}
      </div>

      <style jsx global>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  )
}
