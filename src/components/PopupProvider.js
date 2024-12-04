"use client";

import { useEffect, useState } from 'react';
import ClientWrapper from './ClientWrapper';

export default function PopupProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <ClientWrapper />;
} 