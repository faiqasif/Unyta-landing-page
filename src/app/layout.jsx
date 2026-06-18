import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { FirebaseInit } from "@/components/FirebaseInit";
import { AppToaster } from "@/components/AppToaster";
import { Footer } from "./_components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const satoshi = localFont({
  src: [
    {
      path: "../components/fonts/satoshi (1)/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../components/fonts/satoshi (1)/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../components/fonts/satoshi (1)/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../components/fonts/satoshi (1)/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../components/fonts/satoshi (1)/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata = {
  title: "Unyta",
  description: "Next Generation intelligent systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <FirebaseInit />
        <AppToaster />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
