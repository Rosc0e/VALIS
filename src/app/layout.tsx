import "./globals.css";
import { Inter } from "next/font/google";

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
        <script src="https://unpkg.com/taos@1.0.3/dist/taos.js" async />
      </body>
    </html>
  );
}
