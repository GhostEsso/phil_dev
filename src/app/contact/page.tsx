"use client"

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: false });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur complète:', error);
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du message.';
      setStatus({
        loading: false,
        error: errorMessage,
        success: false
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300">
      <Navbar />
      <div className="pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main title */}
        <h1 className="text-6xl sm:text-8xl lg:text-[12rem] font-bold text-gray-900/10 dark:text-white/10 mb-16 sm:mb-24">
          Contact
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Get in touch, let&apos;s talk.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Fill in the details and I&apos;ll get back to you as soon as I can.
              </p>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-developer/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-developer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">+228 90516979</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-developer/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-developer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">lilipitaham@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-developer/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-developer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Lomé, Togo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Votre Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-developer focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-developer focus:border-transparent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-developer focus:border-transparent transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>

            {status.error && (
              <p className="text-red-500">{status.error}</p>
            )}

            {status.success && (
              <p className="text-green-500">Message envoyé avec succès !</p>
            )}

            <button
              type="submit"
              disabled={status.loading}
              className="w-full px-6 py-3 bg-primary-developer text-white font-medium rounded-lg hover:bg-primary-developer/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.loading ? 'Envoi en cours...' : 'Envoyer le Message'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
} 