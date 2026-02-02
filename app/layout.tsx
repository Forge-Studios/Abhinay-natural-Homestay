import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // [1] Import your component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinay Natural Homestay | Your Escape into Nature",
  description: "Experience tranquility at Abhinay Natural Homestay. Book your stay in the heart of nature with modern eco-luxury comforts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-app-bg text-brand-primary min-h-screen w-full pb-12 md:pb-1">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full">
          <main className="flex-grow w-full">{children}</main>

          <Footer />
        </div>

        {/* [2] WhatsApp Button is placed here so it persists across all pages */}
        <WhatsAppButton phoneNumber="919876543210" />
      </body>
    </html>
  );
}
