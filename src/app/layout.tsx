import "./globals.css";
import { Inter } from "next/font/google";
import BackGround from "./components/BackGround";
import Navbar from "./components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VALIS",
  description: "<-X->",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="lofi" lang="en">
      <body className={inter.className}>
        {children}
        <BackGround />
        {/* <Navbar /> */}
      </body>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js" />
    </html>
  );
}
