"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import qrCode from "@/public/qrcode.png";
import { useEffect, useRef, useState } from "react";
import download from "@/public/download.svg";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const controlNavbar = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if scrolled to the bottom of the document
    const isAtBottom = scrollY + viewportHeight >= documentHeight;
    if (isAtBottom) {
      setShowDownload(false);
    } else {
      setShowDownload(true);
    }
    if (scrollY > 410) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative h-full w-full">
          {/* {show && ( */}

          <div className="flex w-full justify-center items-center">
            <div
              className={`fixed bottom-10 ${
                showDownload
                  ? "opacity-90 transform translate-y-0"
                  : "opacity-0 transform translate-y-full"
              }  z-50 transition-all ease-in-out duration-500`}
            >
              <div className="px-8 gap-3 py-4 rounded-full md:hidden flex  justify-around flex-nowrap  h-full items-center w-full relative bg-black/80 ">
                <Image
                  src={download}
                  className="max-w-full object-contain max-h-full"
                  width={20}
                  height={20}
                  alt="qrcode"
                />
                <h1 className="uppercase font-black font-mona-sans text-[14px] text-[#ffffff] ">
                  Download Now
                </h1>
              </div>
            </div>
          </div>
          {/* )} */}
          <div className="mt-[12vh]">{children}</div>
        </div>
      </body>
    </html>
  );
}
