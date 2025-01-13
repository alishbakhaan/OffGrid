import { Londrina_Solid } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const londrina = Londrina_Solid({ subsets: ['latin'], weight: '400' })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={londrina.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
