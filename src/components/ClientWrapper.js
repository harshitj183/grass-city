"use client";

import { useState, useEffect } from 'react';
import CountryPopup from './CountryPopup';

// Map of language codes to country names
const COUNTRY_MAPPING = {
  'en-GB': 'United Kingdom',
  'en-CA': 'Canada',
  'en-AU': 'Australia',
  'en-NZ': 'New Zealand',
  'fr': 'France',
  'fr-CA': 'Canada',
  'de': 'Germany',
  'es': 'Spain',
  'it': 'Italy',
  'nl': 'Netherlands',
  'pt': 'Portugal',
  'ru': 'Russia',
  'ja': 'Japan',
  'ko': 'South Korea',
  'zh': 'China',
  'hi': 'India'
};

function useCountryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [userCountry, setUserCountry] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkStorage = () => {
      try {
        return window?.localStorage?.getItem('hasSeenPopup') || false;
      } catch (e) {
        return false;
      }
    };

    const detectCountry = () => {
      try {
        const language = window.navigator.language;
        const languages = window.navigator.languages || [language];
        
        // Try to find a matching country from the user's language preferences
        for (const lang of languages) {
          const country = COUNTRY_MAPPING[lang] || COUNTRY_MAPPING[lang.split('-')[0]];
          if (country) return country;
        }
        
        // Default to a generic "International" if no match found
        return 'your country';
      } catch (e) {
        return 'your country';
      }
    };

    const initialize = () => {
      if (typeof window === 'undefined') return;

      try {
        const hasSeenPopup = checkStorage();
        if (hasSeenPopup) {
          if (isMounted) setInitialized(true);
          return;
        }

        const detectedCountry = detectCountry();
        
        if (!isMounted) return;

        // Don't show for US users
        if (detectedCountry && detectedCountry !== 'United States') {
          setUserCountry(detectedCountry);
          setIsOpen(true);
        }
      } catch (error) {
        console.error('Initialization error:', error);
      } finally {
        if (isMounted) {
          setInitialized(true);
        }
      }
    };

    initialize();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClose = () => {
    try {
      window?.localStorage?.setItem('hasSeenPopup', 'true');
    } catch (e) {
      // Silently fail if localStorage is not available
    }
    setIsOpen(false);
  };

  return {
    isOpen,
    userCountry,
    initialized,
    handleClose
  };
}

export default function ClientWrapper() {
  const { isOpen, userCountry, initialized, handleClose } = useCountryPopup();

  if (!initialized) return null;

  return isOpen ? (
    <CountryPopup
      userCountry={userCountry}
      onClose={handleClose}
    />
  ) : null;
} 