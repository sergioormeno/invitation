import '@/styles/globals.css'; // gracias al alias @/*
// Ejemplo: importar fuente Inter (puedes usar cualquier otra)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Metadatos opcionales para SEO
export const metadata = {
  title: 'Invitación de Boda',
  description: '¡Nos Casamos!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}