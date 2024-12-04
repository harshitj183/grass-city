import { Inter } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import CountryPopup from '@/components/CountryPopup';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Grass City - World's Best Online Headshop",
  description: "Shop the best selection of bongs, vaporizers, dab rigs, and smoking accessories at Grass City - the world's oldest and most trusted online headshop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CountryPopup />
        <Script id="country-check" strategy="afterInteractive">
          {`
            try {
              if (typeof window !== 'undefined') {
                window.__COUNTRY_DATA__ = {
                  language: navigator.language,
                  languages: navigator.languages || [navigator.language]
                };
              }
            } catch (e) {
              console.error('Error setting country data:', e);
            }
          `}
        </Script>
      </body>
    </html>
  );
}
