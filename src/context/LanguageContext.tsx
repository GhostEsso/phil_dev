"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '@/i18n/en';
import { fr } from '@/i18n/fr';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  translations: typeof fr;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    // Initial detect
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang && (storedLang === 'en' || storedLang === 'fr')) {
      setLanguageState(storedLang);
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      if (browserLanguage === 'en' || browserLanguage === 'fr') {
        setLanguageState(browserLanguage as Language);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
  };

  const translations = language === 'fr' ? fr : en;

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
