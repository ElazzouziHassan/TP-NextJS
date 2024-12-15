import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Naviggation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TODO LIST | Simple Next JS Application",
  description: "this is just a simple application to showcase how we can impliment NewtJS as FULL STACK framework - MASTER 2IAD(M1)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-w-3xl mx-auto p-4">
          <Naviggation/>
          <div className="mt-6">
            {children}
          </div> 
        </div>
      </body>
    </html>
  );
}
