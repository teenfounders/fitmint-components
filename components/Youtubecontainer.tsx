import Image from "next/image";
import React from "react";
import youtube from "@/public/youtube.webp";
import MainPage from "./MainPage";
type Props = {};

const Youtubecontainer = (props: Props) => {
  return (
    <div className=" w-full px-20 relative  md:h-full  z-20 flex flex-col items-center  justify-start h-full">
      <div className="max-md:max-w-[366px] max-md:max-h-[207px] md:max-w-7xl w-full  h-full rounded-xl">
        <Image
          src={youtube}
          width={1890 / 2}
          height={1290 / 2}
          className="rounded-xl w-full object-cover border-4 h-full bg-white border-[#80808133]"
          alt="iamge"
        />
      </div>
    </div>
  );
};

export default Youtubecontainer;
