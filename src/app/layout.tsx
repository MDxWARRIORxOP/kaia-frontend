import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/global.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kaiakarbon.com"),
  title: "Kaia Karbon",
  description:
    "Kaia Karbon is a carbon credit marketplace that allows users to buy and sell carbon credits, helping to offset their carbon footprint and support sustainable projects.",
  authors: [
    { name: "Mohammed Siddiqui", url: "https://github.com/MDxWARRIORxOP" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black antialiased">
        <div id="root">
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
