import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cx } from "@/utils/css";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mushaheed.me"),
  title: {
    default: "Mushaheed Syed",
    template: "%s | Mushaheed Syed",
  },
  description:
    "A sleep deprived Developer, writer, and creator who loves to explore this imperfect but beautiful world.",
  openGraph: {
    title: "Lee Robinson",
    description:
      "A sleep deprived Developer, writer, and creator who loves to explore this imperfect but beautiful world.",
    url: "https://mushaheed.me",
    siteName: "Mushaheed Syed",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Mushaheed Syed",
    card: "summary_large_image",
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
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer author="Mushaheed Syed" />
        </main>
      </body>
    </html>
  );
}
