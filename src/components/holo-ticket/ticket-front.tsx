"use client"

import React from 'react'
import { Calendar, MapPin, User, ArrowUpRight } from 'lucide-react'

interface TicketFrontProps {
  userName: string;
}

export const TicketFront: React.FC<TicketFrontProps> = ({ userName }) => {
  return (
    <div className="w-full h-full bg-[#FAFAFA] dark:bg-[#0D121F] flex flex-col p-8 relative overflow-hidden font-sans border border-gray-100 dark:border-gray-800 rounded-2xl">
      {/* Subtle background text for texture */}
      <div className="absolute -right-4 top-1/4 rotate-90 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none">
        <span className="text-8xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">
          CREATIVE
        </span>
      </div>

      {/* Header - Minimalist */}
      <div className="flex justify-between items-start mb-12 z-10">
        <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span className="text-white dark:text-black font-bold text-xs">ET</span>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">2026 Portfolio</p>
          <p className="text-xs font-medium dark:text-gray-300">Curated Access</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-grow flex flex-col justify-center z-10">
        <div className="mb-10">
           <p className="text-[10px] font-medium text-primary-developer uppercase tracking-[0.3em] mb-2 px-2 py-0.5 bg-primary-developer/5 w-fit rounded">Candidate</p>
           <h2 className="text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-none">
             {userName.split(' ')[0]}<br/>
             <span className="font-bold">{userName.split(' ')[1]}</span>
           </h2>
        </div>

        <div className="space-y-4">
           <div className="flex items-center gap-4">
              <div className="flex flex-col">
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Specialization</span>
                 <span className="text-xs font-semibold dark:text-gray-300">Fullstack Designer</span>
              </div>
              <div className="w-px h-6 bg-gray-200 dark:bg-gray-800" />
              <div className="flex flex-col">
                 <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Based in</span>
                 <span className="text-xs font-semibold dark:text-gray-300">Togo (Remote)</span>
              </div>
           </div>
        </div>
      </div>

      {/* Footer - Clean Mono */}
      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">Available for hire</span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
      </div>

      {/* Decorative grain/noise texture overlay - very subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay grayscale" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  )
}
