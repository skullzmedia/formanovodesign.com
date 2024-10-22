import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Formanovo - Custom 3D Printed Products",
  description: "Innovative custom 3D printed products by Formanovo. Launching soon!",
  keywords: "3D printing, custom products, Formanovo, innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}