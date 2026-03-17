"use client"

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TicketFront } from './ticket-front'
import { TicketBack } from './ticket-back'

export const HoloTicket = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Motion values for tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth springs for fluid movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), springConfig)

  // Holographic effect values
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig)
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = (mouseX / width) - 0.5
    const yPct = (mouseY / height) - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div 
      className="flex items-center justify-center p-4 cursor-pointer"
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '320px',
          height: '480px',
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 80,
          mass: 1
        }}
        className="relative group shadow-2xl rounded-2xl"
      >
        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl"
          style={{ zIndex: isFlipped ? 0 : 1 }}
        >
          <TicketFront userName="Essohanam Tambana" />
          
          {/* Holographic Overlay Layer */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-color-dodge z-20"
            style={{
              background: `
                radial-gradient(
                  circle at ${glareX}% ${glareY}%, 
                  rgba(255, 255, 255, 0.8) 0%, 
                  rgba(255, 255, 255, 0) 60%
                ),
                linear-gradient(
                  135deg,
                  #ff00ea22 0%,
                  #00e1ff22 25%,
                  #ffea0022 50%,
                  #00ff9522 75%,
                  #ff00ea22 100%
                )
              `,
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: isFlipped ? '100% 100%' : '0% 0%'
            }}
          />
          
          {/* Thread-like shine effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none z-30 overflow-hidden">
             <div className="absolute w-[200%] h-[100%] bg-white blur-3xl transform -rotate-45 -translate-x-full group-hover:animate-shimmer" />
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl"
          style={{ 
            rotateY: 180,
            zIndex: isFlipped ? 1 : 0
          }}
        >
          <TicketBack />
          
           {/* Subtle back glare */}
           <motion.div 
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-soft-light z-20"
            style={{
              background: `radial-gradient(circle at ${100 - glareX}% ${100 - glareY}%, white, transparent)`
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Help tooltip */}
      <div className="absolute -bottom-8 text-[10px] items-center gap-2 opacity-40 hidden md:flex">
         <span>CLIQUE POUR TOURNER</span>
         <div className="w-1 h-1 rounded-full bg-gray-400" />
         <span>SURVOLE POUR L'EFFET HOLO</span>
      </div>

      <style jsx global>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(-45deg); }
          100% { transform: translateX(100%) rotate(-45deg); }
        }
        .animate-shimmer {
          animation: shimmer 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
