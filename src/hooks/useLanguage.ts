import { useState, useEffect } from 'react'
import { en } from '@/i18n/en'
import { fr } from '@/i18n/fr'

type Language = 'en' | 'fr'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en')
  const translations = language === 'fr' ? fr : en

  useEffect(() => {
    // Détecte la langue du navigateur
    const browserLanguage = navigator.language.split('-')[0]
    if (browserLanguage === 'fr') {
      setLanguage('fr')
    }
  }, [])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en')
  }

  return {
    language,
    translations,
    toggleLanguage
  }
} 