import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://publishinghubusa.com"),
  title: {
    default: "Publishing Hub USA",
    template: "%s | Publishing Hub USA",
  },
  description:
    "Professional book marketing strategies to increase book sales, grow your audience, and build your author brand with Amazon, SEO, social media, and publishing promotion.",
  keywords: [
    "book marketing",
    "author marketing",
    "amazon book marketing",
    "book promotion",
    "bestseller marketing",
    "self publishing marketing",
    "author branding",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Publishing Hub USA",
    description: "Turn your book into a best seller with powerful marketing.",
    type: "website",
    url: "https://publishinghubusa.com/",
    siteName: "Publishing Hub USA",
    images: [
      {
        url: "/publishing-websites-icon.png",
        width: 512,
        height: 512,
        alt: " Publishing Hub USA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Publishing Hub USA",
    description: "Turn your book into a best seller with powerful marketing.",
    images: ["/publishing-websites-icon.png"],
  },
  icons: {
    icon: "/publishing-websites-icon.png",
    shortcut: "/publishing-websites-icon.png",
    apple: "/publishing-websites-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/publishing-websites-icon.png" />
        <link rel="apple-touch-icon" href="/publishing-websites-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = localStorage.getItem('bookmkt-theme');
                  if (!t) { t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
                  document.documentElement.setAttribute('data-theme', t);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
