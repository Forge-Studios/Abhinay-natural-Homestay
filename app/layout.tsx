import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    // We apply font variables to the html tag for global access
    <html lang="en" className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-app-bg text-brand-primary min-h-screen w-full">
        {/* The Navbar is fixed and floats above the content */}
        <Navbar />
        
        {/* This wrapper handles the full-page flow:
          - min-h-screen: Ensures background color covers the whole height
          - flex-col: Allows the footer to be pushed to the bottom
        */}
        <div className="flex flex-col min-h-screen w-full">
          <main className="flex-grow w-full">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}