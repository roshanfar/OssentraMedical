import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const display = Red_Hat_Display({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const text = Red_Hat_Text({
  variable: "--font-text-face",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Ossentra | Precision was never a straight line",
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
      className={`${display.variable} ${text.variable} h-full`}
    >
      <body className="min-h-full flex flex-col text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
