import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

const gymName = 'Gimnasio Test';

export const metadata: Metadata = {
  title: gymName,
  description: `Panel de administración de: ${gymName}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
