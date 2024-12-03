"use client";

import { useState, useEffect } from 'react';
import CountryPopup from './CountryPopup';

export default function ClientWrapper() {
  const [state, setState] = useState({
    isOpen: false,
    userCountry: '',
    isMounted: false
  });

  useEffect(() => {
    const init = async () => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      
      if (!hasSeenPopup) {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          setState({
            isOpen: true,
            userCountry: data.country_name,
            isMounted: true
          });
        } catch (error) {
          console.error('Error fetching country:', error);
          setState(prev => ({ ...prev, isMounted: true }));
        }
      } else {
        setState(prev => ({ ...prev, isMounted: true }));
      }
    };

    init();
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenPopup', 'true');
    setState(prev => ({ ...prev, isOpen: false }));
  };

  if (!state.isMounted) return null;

  return state.isOpen ? (
    <CountryPopup
      userCountry={state.userCountry}
      onClose={handleClose}
    />
  ) : null;
} 