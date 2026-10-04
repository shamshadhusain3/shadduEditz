import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shadmaan Mahmood | Social Media Manager & Video Editor",
  description: "Portfolio of Shadmaan Mahmood (Shaddu Editz) — Social Media Manager & Video Editor with 3+ years experience scaling high-growth creators (95M+ reach, 250k+ followers, Premiere Pro, After Effects, CapCut, AI workflows).",
  icons: {
    icon: '/shaddu_editz.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
