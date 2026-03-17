"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useLanguage } from "@/hooks/useLanguage"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Contact() {
  const { translations } = useLanguage();
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || translations.contact.form.error);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur complète:', error);
      const errorMessage = error instanceof Error ? error.message : translations.contact.form.error;
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1121] transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main title */}
        <ScrollAnimation>
          <h1 className="text-6xl sm:text-8xl lg:text-[14rem] font-bold text-gray-900/10 dark:text-white/10 mb-6 sm:mb-16">
            {translations.contact.title}
          </h1>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <ScrollAnimation delay={0.2} direction="left">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  {translations.contact.subtitle}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {translations.contact.description}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3} direction="left">
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-developer transition-transform hover:scale-110">
                      <path fillRule="evenodd" clipRule="evenodd" d="M21.4974 16.4125C18.8594 13.2125 17.5444 13.4995 16.0984 14.2025C15.0974 14.6885 14.2334 15.1105 11.9874 12.8635C9.74141 10.6165 10.1624 9.75354 10.6484 8.75454C11.3534 7.30754 11.6394 5.98954 8.43641 3.35254C7.67341 2.72754 6.84141 2.48754 5.97541 2.65554C4.14241 2.99854 2.84741 5.03854 2.84941 5.03854C2.03741 6.17454 0.925409 9.59054 8.09241 16.7585C12.8064 21.4735 15.8974 22.6045 17.7734 22.6045C18.7504 22.6045 19.3964 22.2985 19.7704 22.0295C19.7914 22.0175 21.8494 20.7425 22.1964 18.8735C22.3584 18.0045 22.1234 17.1775 21.4974 16.4125Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{translations.contact.labels.phone}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">+228 90516979</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-developer transition-transform hover:scale-110">
                        <g transform="translate(1.999900, 2.999600)" fill="currentColor" fillRule="nonzero">
                            <path d="M20,12.9406 C20,15.7306 17.76,17.9906 14.97,18.0006 L14.96,18.0006 L5.05,18.0006 C2.27,18.0006 0,15.7506 0,12.9606 L0,12.9506 C0,12.9506 0.006,8.5246 0.014,6.2986 C0.015,5.8806 0.495,5.6466 0.822,5.9066 C3.198,7.7916 7.447,11.2286 7.5,11.2736 C8.21,11.8426 9.11,12.1636 10.03,12.1636 C10.95,12.1636 11.85,11.8426 12.56,11.2626 C12.613,11.2276 16.767,7.8936 19.179,5.9776 C19.507,5.7166 19.989,5.9506 19.99,6.3676 C20,8.5766 20,12.9406 20,12.9406" opacity="0.4"></path>
                            <path d="M19.4761,2.674 C18.6101,1.042 16.9061,3.55271368e-15 15.0301,3.55271368e-15 L5.0501,3.55271368e-15 C3.1741,3.55271368e-15 1.4701,1.042 0.6041,2.674 C0.4101,3.039 0.5021,3.494 0.8251,3.752 L8.2501,9.691 C8.7701,10.111 9.4001,10.32 10.0301,10.32 C10.0341,10.32 10.0371,10.32 10.0401,10.32 C10.0431,10.32 10.0471,10.32 10.0501,10.32 C10.6801,10.32 11.3101,10.111 11.8301,9.691 L19.2551,3.752 C19.5781,3.494 19.6701,3.039 19.4761,2.674"></path>
                        </g>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{translations.contact.labels.email}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">lilipitaham@gmail.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl flex items-center justify-center shadow-sm">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-developer transition-transform hover:scale-110">
                        <g transform="translate(5.000000, 2.000000)" fill="currentColor" fillRule="nonzero">
                            <path d="M3.53162364,0.93677136 C5.71648131,-0.332725549 8.40202895,-0.310536831 10.5663829,0.994894436 C12.7094606,2.32691389 14.0119656,4.70417621 13.9999171,7.2614437 C13.9499525,9.80193665 12.5532948,12.19 10.8074726,14.0360916 C9.79983405,15.1064007 8.67261414,16.0528287 7.44884341,16.8560387 C7.32280695,16.9289175 7.18475052,16.9777069 7.04148491,17 C6.90359952,16.9941293 6.76931787,16.9533854 6.65075329,16.8814437 C4.78242676,15.6745675 3.14333538,14.1340363 1.81233196,12.3339613 C0.698588545,10.8313638 0.0658356762,9.01600687 1.16173251e-06,7.13441906 L1.16173251e-06,7.13441906 L0.00498738283,6.86069219 C0.0959232361,4.40464541 1.42479659,2.16092909 3.53162364,0.93677136 Z M7.90726427,5.03477398 C7.01907148,4.65723455 5.99504406,4.86234968 5.31331796,5.5543476 C4.63159185,6.24634553 4.42664239,7.28872472 4.794164,8.19478048 C5.1616856,9.10083625 6.029182,9.69184263 6.99160428,9.69184862 C7.62210424,9.69637563 8.22818849,9.44382725 8.67481048,8.99047584 C9.12143248,8.53712442 9.37148354,7.92063779 9.36926261,7.27838032 C9.37261286,6.29803506 8.79545706,5.41231342 7.90726427,5.03477398 Z"></path>
                            <circle cx="7" cy="19" r="1" opacity="0.4"></circle>
                        </g>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{translations.contact.labels.location}</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Lomé, Togo</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Form */}
          <ScrollAnimation delay={0.4} direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {translations.contact.form.name}
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
                  {translations.contact.form.email}
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
                  {translations.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-developer focus:border-transparent transition-colors resize-none"
                  placeholder={translations.contact.form.placeholders.message}
                />
              </div>

              {submitStatus === 'success' && (
                <p className="text-green-500">{translations.contact.form.success}</p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-500">{translations.contact.form.error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary-developer text-white font-medium rounded-lg hover:bg-primary-developer/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? translations.contact.form.sending : translations.contact.form.send}
              </button>
            </form>
          </ScrollAnimation>
        </div>
      </div>
      <Footer />
    </main>
  )
} 