import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import Navbar from "../components/Navbar";
import { TypingProvider } from "@/context/TypingContext";
import Footer from "@/components/Footer";
import ChatButton from "@/components/ChatButton";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Islam365.online",
  description: "A website dedicated to providing Islamic knowledge and guidance.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <link rel="manifest" href="/site.webmanifest"></link>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>
          <meta name="msapplication-TileColor" content="#da532c"></meta>
          <meta name="theme-color" content="#ffffff"></meta>
        </head>

        <body className={`${inter.className} gradient-shadow`}>
          <Providers>
            <TypingProvider>
              <Navbar />
              {children}
            </TypingProvider>
            <ChatButton />


          </Providers>
        </body>
      </html>
    </ >
  );
}
