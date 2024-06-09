'use client'
import TopHeader from "@/components/header/TopHeader";
import "./globals.css";
import Header from "@/components/header/Header";
/* import { motion, AnimatePresence } from 'framer-motion'; */
import SideNav from "@/components/sidenav/SideNav";


/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[#121212]">
        <div>
          <TopHeader />
          <Header />
        </div>
        <SideNav />
        <div className="ml-[300px] border border-[#b6b6b6]">
          {children}
        </div>
      </body>
    </html >
  );
}