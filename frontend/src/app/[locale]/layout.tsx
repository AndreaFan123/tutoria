import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Mulish, Noto_Sans_TC } from "next/font/google";
import { getFontFamily } from "@/lib/fonts";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import "./globals.css";

// 初始化字體
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-tc",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const fontFamily = getFontFamily(locale);

  return (
    <html lang={locale}>
      <body
        className={`antialiased scroll-smooth ${mulish.variable} ${notoSansTC.variable}`}
        style={{ fontFamily }}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
