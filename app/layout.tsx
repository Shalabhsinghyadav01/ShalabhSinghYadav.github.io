import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shalabh Singh Yadav | Machine Learning Engineer / Data Scientist",
  description:
    "Machine Learning Engineer and Data Scientist specializing in Agentic AI & Applied ML. Expertise in Python, SQL, Tableau, and machine learning.",
  keywords: [
    "Machine Learning Engineer",
    "Data Scientist",
    "Agentic AI",
    "Applied ML",
    "Python",
    "SQL",
    "Tableau",
    "Machine Learning",
    "Business Intelligence",
  ],
  authors: [{ name: "Shalabh Singh Yadav" }],
  openGraph: {
    title: "Shalabh Singh Yadav | Machine Learning Engineer / Data Scientist",
    description:
      "Machine Learning Engineer and Data Scientist specializing in Agentic AI & Applied ML.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalabh Singh Yadav | Machine Learning Engineer / Data Scientist",
    description:
      "Machine Learning Engineer and Data Scientist specializing in Agentic AI & Applied ML.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-navy-950 text-neutral-50 relative`}
      >
        <CursorGlow />
        <div className="relative z-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
