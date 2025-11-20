"use client";
import "./globals.css";
import "@/styles/tailwind.css";
import "@/styles/custom.css";
import Footer from "@/components/public/layout/Footer";
import Navbar from "@/components/public/layout/Navbar";
import CommunityForm from "@/components/public/CommunityForm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <CommunityForm />
        <Footer />
      </body>
    </html>
  );
}
