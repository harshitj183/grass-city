"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const CountryPopup = dynamic(() => import('./ClientWrapper'), {
  suspense: true,
  ssr: false
});

export default function PopupProvider() {
  return (
    <Suspense fallback={null}>
      <CountryPopup />
    </Suspense>
  );
} 