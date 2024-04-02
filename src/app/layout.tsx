import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "./globals.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { Metadata } from "next";
import NavBar from "@/components/navigation";


export const metadata: Metadata = {
  title: "My ShadwithMONGO PROJECT",
  description: "Booking online & rental online React Next Template",
  keywords: "Chisfis, Booking online, React Next Template",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ClientCommons />
        {/* < NavBar /> */}
        <SiteHeader />
        {children}
        <FooterNav />
        <Footer />
      </body>
    </html>
  );
}