import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  metadataBase: new URL("https://saadgipuniwala.dev"), // EDIT_ME — swap for your real domain
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
  keywords: [
    "Saadgi Puniwala",
    "AI Engineer",
    "Machine Learning",
    "Data Science",
    "Embedded Systems",
    "IoT",
    "Python Developer",
    "Bengaluru",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    images: [{ url: profile.photo, width: 800, height: 1000, alt: profile.name }], // EDIT_ME — swap for a dedicated 1200x630 banner image once you have one
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    images: [profile.photo],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — fetched client-side only, so the build never needs network access. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-fraunces: 'Fraunces', 'Iowan Old Style', 'Palatino Linotype', serif;
            --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            --font-mono: 'JetBrains Mono', ui-monospace, 'SF Mono', monospace;
          }
        `}</style>
      </head>
      <body className="font-sans">
        <SmoothScroll>
          <GrainOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
