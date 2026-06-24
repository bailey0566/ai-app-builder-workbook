import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "700"],
});

const bodyFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AI App Builder Internship",
  description: "An interactive workbook for the AI App Builder summer internship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-gray-50 text-gray-900 antialiased`}
        style={{
          fontFamily: "var(--font-body), serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
