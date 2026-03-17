"use client"

import React from 'react'
import { Calendar, Clock, MapPin, User, Ticket as TicketIcon } from 'lucide-react'

interface TicketFrontProps {
  userName: string;
}

export const TicketFront: React.FC<TicketFrontProps> = ({ userName }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 flex flex-col p-6 relative overflow-hidden">
      {/* Decorative dots on edges */}
      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white dark:bg-[#0B1121] rounded-full -translate-y-1/2 shadow-inner z-10" />
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white dark:bg-[#0B1121] rounded-full -translate-y-1/2 shadow-inner z-10" />
      
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-1">Portfolio Event</h2>
          <p className="text-xl font-bold dark:text-white">Fullstack Dev 2026</p>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <TicketIcon className="w-6 h-6 text-primary-developer" />
        </div>
      </div>

      {/* Main Info */}
      <div className="space-y-6 flex-grow">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <User className="w-3 h-3" /> Attendee
          </p>
          <p className="text-lg font-bold dark:text-white">{userName}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3 h-3" /> Date
            </p>
            <p className="text-sm font-semibold dark:text-gray-200">14 Jan, 2026</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
              <Clock className="w-3 h-3" /> Time
            </p>
            <p className="text-sm font-semibold dark:text-gray-200">11:00 AM CET</p>
          </div>
        </div>

        <div className="space-y-1 pt-2">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Location
          </p>
          <p className="text-sm font-semibold dark:text-gray-200">Remote / Digital World</p>
        </div>
      </div>

      {/* Footer / ID */}
      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-end">
        <div>
          <p className="text-[9px] font-mono text-gray-400">TICKET NO.</p>
          <p className="text-xs font-mono font-bold dark:text-gray-300">#00001992-GHOST</p>
        </div>
        <div className="text-right">
          <p className="text-[8px] font-bold text-primary-developer opacity-50">VERIFIED ACCESS</p>
        </div>
      </div>

      {/* Subtle patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-developer/5 rounded-full -translate-y-16 translate-x-16 blur-3xl lg:block hidden" />
    </div>
  )
}
