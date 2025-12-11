import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Farpy — Distributed GPU power for everyone',
  description: 'Distributed GPU power for everyone. Tiny taps. Big compute.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
