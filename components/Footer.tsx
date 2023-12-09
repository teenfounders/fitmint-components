import React from "react";
import logo from "@/public/footerlogo.svg";
import twi from "@/public/twitter.svg";
import dicord from "@/public/dicord.svg";
import tele from "@/public/telegram.svg";
import insta from "@/public/insta.svg";
import Image from "next/image";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="items-center flex flex-col flex-nowrap gap-[32px] h-full justify-end p-0 relative max-w-sm">
      <span className="flex   transition-all duration-300   ease-in-out mt-8 gap-2 items-center">
        <Image src={logo} width={32} height={32} alt="logo" />
        <span className="text-2xl font-mono-sans text-[#ffffff] font-black  ">
          fitmint
        </span>
      </span>{" "}
      <div className="flex items-center flex-row gap-10 min-h-fit justify-center relative min-w-fit p-0">
        <Image src={twi} width={32} height={32} alt="logo" />
        <Image src={dicord} width={32} height={32} alt="logo" />
        <Image src={insta} width={32} height={32} alt="logo" />
        <Image src={tele} width={32} height={32} alt="logo" />
      </div>
      <div className="">
        <p className="font-semibold leading-[2.5em] text-center text-[#ffffff]">
          © Fitmint 2023 • Privacy policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
