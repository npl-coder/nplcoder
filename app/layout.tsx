import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NPLCoder",
  description: "NPLCoder: Shaping Nepal’s Future with Computational Innovation",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-verdana antialiased ">
        <ThemeProvider>
        <Nav/>

        {children}
        
        <Footer/></ThemeProvider>

      </body>
    </html>
  );
}
