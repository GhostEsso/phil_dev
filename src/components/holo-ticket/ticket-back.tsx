"use client"

import React from 'react'
import QRCode from 'react-qr-code'

export const TicketBack: React.FC = () => {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Decorative dots on edges */}
      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white dark:bg-[#0B1121] rounded-full -translate-y-1/2 shadow-inner z-10" />
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white dark:bg-[#0B1121] rounded-full -translate-y-1/2 shadow-inner z-10" />
      
      <div className="text-center mb-8">
        <h3 className="text-sm font-black tracking-widest text-gray-400 uppercase">Scan for demo</h3>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 mb-8">
        <QRCode 
          value="https://esso-portfolio.vercel.app/"
          size={160}
          fgColor="#0B1121"
          level="H"
        />
      </div>

      <div className="text-center space-y-2">
        <p className="text-[10px] font-bold text-primary-developer uppercase tracking-[0.25em]">Access Key</p>
        <p className="text-xs font-mono dark:text-gray-400">GH-2026-XQ99</p>
      </div>

      {/* Holographic noise background texture for the back */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] grayscale contrast-150" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  )
}
