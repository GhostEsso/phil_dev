"use client"

import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TicketFront } from './ticket-front'
import { TicketBack } from './ticket-back'

/**
 * HoloTicket Component
 * A high-fidelity, interactive 3D ticket with holographic effects.
 * Fixed TypeScript errors and enhanced design with glassmorphism and better physics.
 */
export const HoloTicket = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Motion values for tilt and mouse position
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Refined spring configuration for premium feel
  const springConfig = { damping: 25, stiffness: 120, mass: 0.8 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), springConfig)

  // Reactive holographic position values
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig)
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig)

  // Inverse values for the back side glare (fixed TS error by using typed useTransform)
  const invGlareX = useTransform(glareX, (val: number) => 100 - val)
  const invGlareY = useTransform(glareY, (val: number) => 100 - val)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const xPct = (event.clientX - rect.left) / rect.width - 0.5
    const yPct = (event.clientY - rect.top) / rect.height - 0.5
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
      style={{ perspective: '1500px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '320px',
          height: '480px', // Re-aligned height
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0
        }}
        transition={{
          type: 'spring',
          damping: 18,
          stiffness: 70,
          mass: 1.2
        }}
        className="relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-2xl"
      >
        {/* Border Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-developer via-primary-visionary to-primary-human rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Front Side */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden glass-card bg-white dark:bg-gray-900 border border-white/20 dark:border-gray-800"
          style={{ zIndex: isFlipped ? 0 : 1 }}
        >
          <TicketFront userName="Essohanam Tambana" />
          
          {/* Enhanced Holographic Rainbow Layer */}
          <motion.div 
            className="absolute inset-0 pointer-events-none mix-blend-color-dodge z-20"
            style={{
              opacity: 0.5,
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]: any[]) => `
                  radial-gradient(
                    circle at ${gx}% ${gy}%, 
                    rgba(255, 255, 255, 0.9) 0%, 
                    rgba(255, 255, 255, 0) 50%
                  ),
                  linear-gradient(
                    ${gx + gy}deg,
                    #ff00ea22 0%,
                    #00e1ff22 20%,
                    #ffea0022 40%,
                    #00ff9522 60%,
                    #6e00ff22 80%,
                    #ff00ea22 100%
                  )
                `
              ),
              backgroundSize: '150% 150%',
            }}
          />

          {/* Frosted Shimmer Animation */}
          <div className="absolute inset-0 opacity-30 pointer-events-none z-30 overflow-hidden">
             <div className="absolute w-[300%] h-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transform -rotate-45 -translate-x-full animate-shimmer" />
          </div>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden glass-card bg-white dark:bg-gray-900 border border-white/20 dark:border-gray-800"
          style={{ 
            rotateY: 180,
            zIndex: isFlipped ? 1 : 0
          }}
        >
          <TicketBack />
          
           {/* Static Grain Texture */}
           <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
                style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

           {/* Back glare response */}
           <motion.div 
            className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen z-20"
            style={{
              background: useTransform(
                [invGlareX, invGlareY],
                ([igx, igy]: any[]) => `radial-gradient(circle at ${igx}% ${igy}%, rgba(255,255,255,0.6), transparent 70%)`
              )
            }}
          />
        </motion.div>
      </motion.div>
      
      {/* Help tooltip */}
      <div className="absolute -bottom-10 flex items-center gap-3 opacity-30 text-[9px] font-bold tracking-[0.2em] text-gray-500 uppercase">
         <span>Click to flip</span>
         <div className="w-1 h-1 rounded-full bg-gray-400" />
         <span>Hover to shine</span>
      </div>

      <style jsx global>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) rotate(-45deg); }
          100% { transform: translateX(150%) rotate(-45deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .glass-card {
           backdrop-filter: blur(8px);
           -webkit-backdrop-filter: blur(8px);
        }
      `}</style>
    </div>
  )
}
