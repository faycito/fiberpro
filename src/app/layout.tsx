import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiber Pro | Internet 100% fibra óptica",
  description: "FiberPro el mejor internet de fibra óptica de Lima Norte",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
