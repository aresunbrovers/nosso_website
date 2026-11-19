import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const siteUrl = "https://blazemorales.github.io/ARES_ROVERS_UNB_WEBSITE";
const ogImage = `${siteUrl}/brand/Logo_dourada_roxa.png`;
const description =
  "Equipe oficial de Rovers da Universidade de Brasília, vinculada à Engenharia Aeroespacial da UnB. Desenvolvemos veículos robóticos para exploração planetária.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ARES Rovers UnB",
    template: "%s · ARES Rovers UnB",
  },
  description,
  keywords: [
    "ARES",
    "Rover",
    "UnB",
    "Universidade de Brasília",
    "Engenharia Aeroespacial",
    "exploração planetária",
    "robótica",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ARES Rovers UnB",
    title: "ARES Rovers UnB",
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1200,
        alt: "Logo ARES Rovers UnB",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARES Rovers UnB",
    description,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
