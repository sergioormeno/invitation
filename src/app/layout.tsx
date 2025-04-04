import "@/styles/globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

// Metadatos opcionales
export const metadata = {
  title: "Invitación de Boda - Estilo Café y Beige",
  description: "Invitación refinada en tonos café y beige",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  );
}