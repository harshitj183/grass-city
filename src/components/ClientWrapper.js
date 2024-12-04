"use client";

import { useState, useEffect } from 'react';
import CountryPopup from './CountryPopup';

function useCountryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [userCountry, setUserCountry] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (hasSeenPopup) return;

    const detectCountry = () => {
      try {
        const language = navigator.language;
        const country = language.split('-')[1] || 'your country';
        return country !== 'US' ? country : null;
      } catch (e) {
        return 'your country';
      }
    };

    const country = detectCountry();
    if (country) {
      setUserCountry(country);
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenPopup', 'true');
    setIsOpen(false);
  };

  return {
    isOpen,
    userCountry,
    mounted,
    handleClose
  };
}

export default function ClientWrapper() {
  const { isOpen, userCountry, mounted, handleClose } = useCountryPopup();

  if (!mounted) return null;

  return isOpen ? (
    <CountryPopup
      userCountry={userCountry}
      onClose={handleClose}
    />
  ) : null;
} 