import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ActiveSectionProvider } from "./ActiveSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodePipe",
  description: "Your dreams our teamwork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}