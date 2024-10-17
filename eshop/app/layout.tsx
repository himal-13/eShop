import type { Metadata } from "next";
import "./globals.css";
import ProductsContext from "@/utils/Context";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "eShop",
  description: "A Eccomerce platform app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">
        <ProductsContext>
          <Navbar/>
        {children}
        </ProductsContext>
      </body>
    </html>
  );
}
