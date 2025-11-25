import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Symplexy - Сервіс підбору ШІ-рішень для бізнесу",
  description: "Знайдіть найкращі AI-інструменти для вашого бізнесу. Symplexy допомагає підібрати оптимальні нейромережі для автоматизації робочих процесів.",
  keywords: ["ШІ", "AI", "нейромережі", "бізнес", "автоматизація", "Symplexy"],
  openGraph: {
    title: "Symplexy - Сервіс підбору ШІ-рішень для бізнесу",
    description: "Знайдіть найкращі AI-інструменти для вашого бізнесу",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${rubik.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
