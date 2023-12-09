"use client";
import Image from "next/image";
import React from "react";
import mountain from "@/public/mountain.svg";
import cloud from "@/public/clude1.png";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";
type Props = {};

const MountainComponent = (props: Props) => {
  return (
    <div className="flex w-full  min-h-screen  h-full pt-20   flex-col relative  justify-between items-center bg-gradient-to-b from-white via-white to-transparent">
      <h1 className="font-oliver-regular max-w-md text-7xl leading-[80%] text-center text-[#C3C3C3]/40">
        It’s never too late to start your fitness adventure
      </h1>
      <div className="w-full -mt-20 max-h-screen min-h-full ">
        <Image
          src={mountain}
          width={1890}
          height={1200}
          alt="mountain"
          className="max-w-full min-h-screen object-cover"
        />
      </div>
      <div className="absolute flex flex-col bottom-20  mt-20">
        <Marquee direction="right" speed={30}>
          <Image
            src={cloud}
            width={1890 / 2}
            height={1200 / 2}
            alt="mountain"
            className=" "
          />
          <Image
            src={cloud}
            width={1890 / 2}
            height={1200 / 2}
            alt="mountain"
            className="  "
          />
        </Marquee>
        <div className="flex  flex-col items-center justify-center">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MountainComponent;
