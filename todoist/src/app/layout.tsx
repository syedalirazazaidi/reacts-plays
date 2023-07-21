import Nav from "@/commons/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todoist",
  description: "Discover and shared AI prompt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
