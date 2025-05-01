import { Bricolage_Grotesque, Amarante } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactLenis } from 'lenis/react'
import { Toaster } from "sonner";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const amarante = Amarante({
  variable: "--font-amarante",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Reverie",
  description: "A Journaling App For Everyone",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
       <ReactLenis root>
      <html lang="en">
        <body className={`${bricolage.className} ${amarante.variable} antialiased`}>
          <div className="bg-[url('/bg-2.jpg')] opacity-70 fixed -z-10 inset-0" />
          <Header />

          <main className="min-h-screen">{children}</main>

          <Toaster richColors />

          <footer className="py-12">
            <div className="mx-auto px-4 text-center text-green-950 font-semibold">
              <p>Designed & Developed By Kunal Diwakar</p>
            </div>
          </footer>
        </body>
      </html>
      </ReactLenis>
    </ClerkProvider>
  );
}
