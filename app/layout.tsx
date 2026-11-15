import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";

const publicSans = Public_Sans({
  variable: "--font-public",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ossentra | Precision was never a straight line",
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
      className={`${publicSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
