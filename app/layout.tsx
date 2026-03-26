import type { Metadata, Viewport } from "next";
import { Rubik } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  variable: "--font-rubik",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
};

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
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; window.scrollTo(0, 0);` }} />
      </head>
      <body className={`${rubik.variable} font-sans bg-[#0a1628]`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
