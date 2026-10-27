import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Health Mavens | Leading Healthcare Consultant & Medical Tourism in India",
  description:
    "Health Mavens connects international patients with premier JCI & NABH accredited hospitals in India for advanced surgical care with comprehensive end-to-end concierge support.",
  keywords: [
    "Medical Tourism India",
    "Healthcare Facilitation",
    "Health Mavens",
    "JCI Hospitals India",
    "NABH Hospitals",
    "Affordable Surgery India",
    "Cardiac Surgery India",
    "Orthopedic Surgery India",
    "Ayurveda India",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} bg-white font-sans antialiased text-[#46545B] selection:bg-[#00838D]/20 selection:text-[#00838D]`}>
        {children}
      </body>
    </html>
  );
}
