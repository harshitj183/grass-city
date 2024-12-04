"use client";

import { useState, useEffect } from 'react';
import styles from './CountryPopup.module.css';

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

export default function CountryPopup() {
  const [state, setState] = useState({
    isOpen: false,
    userCountry: '',
    hasChecked: false
  });

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (hasSeenPopup) {
      setState(prev => ({ ...prev, hasChecked: true }));
      return;
    }

    const countryData = window.__COUNTRY_DATA__;
    if (!countryData) {
      setState(prev => ({ ...prev, hasChecked: true }));
      return;
    }

    const languages = countryData.languages;
    let detectedCountry = 'your country';

    for (const lang of languages) {
      const country = COUNTRY_MAPPING[lang] || COUNTRY_MAPPING[lang.split('-')[0]];
      if (country && country !== 'United States') {
        detectedCountry = country;
        break;
      }
    }

    setState({
      isOpen: true,
      userCountry: detectedCountry,
      hasChecked: true
    });
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenPopup', 'true');
    setState(prev => ({ ...prev, isOpen: false }));
  };

  if (!state.hasChecked || !state.isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        <h2>We don't ship to {state.userCountry}</h2>
        <button className={styles.stayButton} onClick={handleClose}>
          Stay on US store
        </button>
      </div>
    </div>
  );
}