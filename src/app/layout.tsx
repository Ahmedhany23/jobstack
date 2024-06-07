import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const inter = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobStack",
  description: "Jobstack",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body className={inter.className}>
       {children}
      </body>
    </html>
  );
}
