"use client"

import React from 'react'
import { Calendar, Clock, MapPin, User, Ticket as TicketIcon, Fingerprint } from 'lucide-react'

interface TicketFrontProps {
  userName: string;
}

export const TicketFront: React.FC<TicketFrontProps> = ({ userName }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 flex flex-col p-6 relative overflow-hidden font-sans">
      {/* Decorative dots on edges (Ticket notches) */}
      <div className="absolute top-1/2 -left-4 w-8 h-8 bg-white dark:bg-[#0B1121] rounded-full -translate-y-1/2 z-10 shadow-inner" />
      <div className="absolute top-1/2 -right-4 w-8 h-8 bg-white dark:bg-[#0B1121] rounded-full -translate-y-1/2 z-10 shadow-inner" />
      
      {/* Premium Gradient Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
           style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)' }} />

      {/* Header */}
      <div className="flex justify-between items-start mb-10 z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-primary-developer/10 rounded text-[9px] font-black tracking-widest text-primary-developer uppercase mb-2">
            <Fingerprint className="w-3 h-3" /> Secure Access
          </div>
          <h2 className="text-2xl font-black dark:text-white leading-tight">
            DEEP<span className="text-primary-developer">MIND</span><br/>
            CONFERENCE
          </h2>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
          <TicketIcon className="w-6 h-6 text-primary-developer" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow space-y-8 z-10">
        {/* Attendee Info */}
        <div className="relative">
          <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary-developer rounded-r-full" />
          <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-1">Pass Holder</p>
          <p className="text-2xl font-black dark:text-white tracking-tight">{userName}</p>
          <p className="text-[10px] font-bold text-primary-developer/60 mt-0.5">@GHOSTESSO · FULLSTACK ARCHITECT</p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          <div className="space-y-1">
            <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-primary-developer" /> Date
            </p>
            <p className="text-sm font-bold dark:text-gray-200">14 JAN, 2026</p>
          </div>
          <div className="space-y-1 text-right md:text-left">
            <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1.5 justify-end md:justify-start">
              <Clock className="w-3 h-3 text-primary-developer" /> Time
            </p>
            <p className="text-sm font-bold dark:text-gray-200">11:00 AM CET</p>
          </div>
          <div className="col-span-2 space-y-1">
            <p className="text-[9px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-primary-developer" /> Digital Zone
            </p>
            <p className="text-sm font-bold dark:text-gray-200">LOME, TOGO · REMOTE NODE</p>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="relative my-6 z-10">
         <div className="border-t-2 border-dashed border-gray-100 dark:border-gray-800 w-full" />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end z-10">
        <div className="space-y-1">
          <p className="text-[8px] font-black text-gray-400 tracking-tighter uppercase">Issue Auth Instance</p>
          <p className="text-[10px] font-mono font-bold dark:text-gray-300">#PHIL-VITE-2026</p>
        </div>
        <div className="flex flex-col items-end">
           <div className="w-12 h-4 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-around px-1 mb-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-[1px] h-3 bg-gray-400" />
              ))}
           </div>
           <p className="text-[8px] font-black text-primary-developer">MASTER VERIFIED</p>
        </div>
      </div>

      {/* Luxury Holographic Background Blobs */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-developer/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-human/10 rounded-full blur-[80px] pointer-events-none" />
    </div>
  )
}
