import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
  description: `${portfolioData.personalInfo.name} - ${portfolioData.personalInfo.role} based in ${portfolioData.personalInfo.location}. Portfolio showcasing web applications, technical skills, and projects.`,
  keywords: [
    "Tanmoy Debnath",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: portfolioData.personalInfo.name }],
  openGraph: {
    title: `${portfolioData.personalInfo.name} | ${portfolioData.personalInfo.role}`,
    description: `Portfolio of ${portfolioData.personalInfo.name}, ${portfolioData.personalInfo.role} based in ${portfolioData.personalInfo.location}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
