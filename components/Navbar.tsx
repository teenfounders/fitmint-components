import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { LiaBarsSolid } from "react-icons/lia";
import { MdOutlineClose } from "react-icons/md";
type Props = {};

const Navbar = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="relative w-full flex flex-col justify-center z-10 items-center h-[12vh] bg-gradient-to-b from-white via-white to-transparent">
        {/* White overlay with gradient to transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-30"></div>

        {/* Navigation */}
        <nav className="flex px-10 w-full h-full justify-between items-center z-40 max-w-[1100px]">
          <span className="flex   transition-all duration-300   ease-in-out mt-8 gap-2 items-center">
            <Image src={logo} width={32} height={32} alt="logo" />
            <span className="text-lg font-mono-sans text-[#2C2C2D] font-black  ">
              fitmint
            </span>
          </span>
          <div className="   ">
            <button
              onClick={() => setNavOpen((prev) => !prev)}
              className="md:hidden fixed top-8 right-3   flex"
            >
              {navOpen ? (
                <MdOutlineClose size={30} className="text-[#80808133]" />
              ) : (
                <LiaBarsSolid size={30} />
              )}
            </button>

            <span
              className={`hidden md:flex gap-6 text-[14px] mt-8  text-black font-mono-sans font-black`}
            >
              <Link href={"/"}>challenges</Link>
              <Link href={"/origin-pass"}>origin pass</Link>
            </span>
          </div>
        </nav>
        <div
          className={`${
            navOpen
              ? "bg-gradient-to-b from-white via-white to-transparent gap-6 w-full text-[14px] items-center transition-all duration-300   ease-in-out justify-center top-8 opacity-100 transform -translate-y-0 text-black font-mono-sans flex flex-col font-black"
              : "opacity-0 transform -translate-y-full  transition-all duration-100"
          }`}
        >
          <Link href={"#"}>challenges</Link>
          <Link href={"#"}>origin pass</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
