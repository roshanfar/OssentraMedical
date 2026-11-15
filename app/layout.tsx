import type { Metadata } from "next";
import { Albert_Sans, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Ossentra | Reimagining cranial surgery",
    template: "%s | Ossentra",
  },
  description:
    "Ossentra is a handheld articulating bone punch for minimally invasive craniosynostosis surgery. It bends to follow the curve of an infant's cranium and shields the dura with the jaw that cuts. Spun out of SickKids, Toronto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${albert.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
