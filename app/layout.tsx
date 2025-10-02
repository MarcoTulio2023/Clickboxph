// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '../components/ui/utils'; // Verifique se o caminho para utils.ts está correto

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gilberto Santos Fotografia',
  description: 'Transformando momentos em arte visual através de uma perspectiva única e atemporal.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(inter.className, 'bg-background text-foreground')}>
        {children}
      </body>
    </html>
  );
}