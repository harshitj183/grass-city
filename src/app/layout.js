import { Inter } from 'next/font/google';
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
