import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CITadel — Modular Intramedullary System for Critical Long-Bone Defects",
  description:
    "CITadel is a modular intramedullary fixator with selective HA+Ag coating for temporary internal stabilisation of critical long-bone defects. Developed by Maksym Baida, PhD — Bogomolets National Medical University, Kyiv.",
  keywords: [
    "intramedullary fixator",
    "critical bone defect",
    "CITadel",
    "PMMA spacer",
    "HA+Ag coating",
    "temporary stabilisation",
    "orthopaedic",
    "traumatology",
    "long-bone defect",
    "staged reconstruction",
    "medical device",
  ],
  openGraph: {
    title: "CITadel — Modular Intramedullary System for Critical Long-Bone Defects",
    description:
      "Internal stabilisation of critical long-bone defects without external fixation. Bench-validated. TRL 4–5.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
