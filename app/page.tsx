"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroPage from "@/components/HeroPage";
import MountainComponent from "@/components/MountainComponent";
import Youtubecontainer from "@/components/Youtubecontainer";
import Image from "next/image";
import qrCode from "@/public/qrcode.png";
import MainPage from "@/components/MainPage";

export default function Home() {
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
    <div className="relative flex flex-col gap-10 items-center justify-center h-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Download Section */}
      <div
        className={`fixed z-50 transition-all ease-in-out duration-500 ${
          show
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-full"
        } right-10 bottom-10 h-full w-full max-h-[101px] max-w-[240px]`}
      >
        <div className="p-2 hidden md:flex justify-around rounded-[20px] flex-nowrap h-full items-center w-full relative bg-black/80 ">
          <h1 className="uppercase font-black font-mona-sans text-[14px] text-[#ffffff] ">
            Download <br />
            fitmint app
          </h1>
          <Image
            src={qrCode}
            className="max-w-full object-contain max-h-full"
            width={80}
            height={80}
            alt="qrcode"
          />
        </div>
      </div>

      {/* HeroPage */}
      <div className="mt-14 h-screen flex w-full justify-center -z-10 items-center">
        <HeroPage />
      </div>

      {/* Youtubecontainer */}
      <div className="max-md:absolute max-md:top-[250px] flex flex-col max-md:mx-auto max-md:bg-white relative max-md:youtubecontainer mt-14 w-full h-full">
        <Youtubecontainer />
        <MainPage />
      </div>

      <MountainComponent />
    </div>
  );
}
