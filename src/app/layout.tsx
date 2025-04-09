import "@/styles/globals.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

// Metadatos opcionales
export const metadata = {
  title: "Sergio & Valentina – Nuestra Boda",
  description: "¡Estás invitado a celebrar el amor de Sergio & Valentina! Descubre todos los detalles del gran día.",
  openGraph: {
    title: "Sergio & Valentina – Nuestra Boda",
    description: "¡Estás invitado a celebrar el amor de Sergio & Valentina!",
    url: "https://www.matrisergioyvalentina.com", // reemplaza con tu dominio real
    siteName: "Boda Sergio & Valentina",
    images: [
      {
        url: "https://invitation-git-master-sergios-projects-3264126e.vercel.app/img/loves.jpg", // la imagen del Hero (ver paso 2)
        width: 1200,
        height: 630,
        alt: "Invitación de matrimonio Sergio & Valentina",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio & Valentina – Nuestra Boda",
    description: "¡Estás invitado a nuestro gran día!",
    images: ["https://invitation-git-master-sergios-projects-3264126e.vercel.app/img/loves.jpg"],
  },
  images: [
    {
      url: "https://invitation-git-master-sergios-projects-3264126e.vercel.app/img/loves.jpg", // la imagen del Hero (ver paso 2)
      width: 1200,
      height: 630,
      alt: "Invitación de matrimonio Sergio & Valentina",
    },
  ]
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

