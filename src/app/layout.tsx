"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Header from "../../components/header";
import Footer from "../../components/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiCMcEDd5LQZks3DiCQKbQZ4FBrPz3BNSTfA&s"
        />
      </head>
      <body className={inter.className}>
        {pathname !== "/checkout/cart" && <Header />}
        <div className="hero-section" style={{ minHeight: "70vh" }}>
          {children}
        </div>
        {pathname !== "/checkout/cart" && <Footer />}
      </body>
    </html>
  );
}
