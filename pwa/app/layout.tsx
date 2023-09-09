import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import TopLoader from "@/components/TopLoader";
import Web5Provider from "./Web5Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ortana",
  description: "Own your digtial identity, data, and finances",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: false,
    viewportFit: "cover",
  },
  applicationName: "Ortana",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ortana",
    startupImage: "/splash.png",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#fff",
    },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <Web5Provider>
          <TopLoader />
          {children}
        </Web5Provider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
