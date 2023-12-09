"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import circle from "@/public/circle.svg";
import circle1 from "@/public/circlemini.svg";
import shoe from "@/public/shoe.svg";
import trophy from "@/public/trophy.svg";
import smile from "@/public/smile.svg";
import qrCode from "@/public/qrcode.png";

const HeroPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const controls = useAnimation();
  const controlsCircle = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPrevScrollY(scrollY);
      setScrollY(window.scrollY);
    };

    const scale = inView
      ? scrollY > prevScrollY
        ? 1 - scrollY / 5000
        : 1
      : 0.8;
    const circleScale = inView
      ? scrollY > prevScrollY
        ? 1 - scrollY / 1000
        : 1
      : 0.95;
    controlsCircle.start({ scale: circleScale, transition: { duration: 0.7 } });

    const transitionDuration = inView
      ? scrollY > prevScrollY
        ? 0.2
        : 0.5
      : 0.1;

    controls.start({ scale, transition: { duration: transitionDuration } });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView, controls, scrollY, prevScrollY]);

  return (
    <div className="max-w-[1230px] fixed top-0 w-full h-full flex flex-col justify-start md:justify-center items-start md:items-center ">
      {/* Circle */}
      <div className="bg-[#f1e2c8] md:bg-[#E69C14]/30 absolute bottom-[-6rem] -z-10 right-[1rem] h-[21.25rem] w-[21.25rem] rounded-full blur-[14rem] sm:w-[68.75rem]"></div>
      <div className="relative w-full overflow-x-clip h-full">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={controlsCircle}
          transition={{ duration: 0.2 }}
          className="absolute flex inset-auto max-md:-top-28 -z-40   w-full items-center justify-center h-full"
        >
          <div className="absolute flex inset-auto -z-40 max-w-xl mx-32 px-10 w-full items-center justify-center h-full">
            <Image
              src={circle}
              width={100}
              height={100}
              alt="circle"
              className="object-cover items-center -z-30 opacity-20 w-full"
            />
          </div>

          <div className="absolute flex inset-auto -z-40 max-w-3xl px-10 w-full items-center justify-center h-full">
            <Image
              src={circle}
              width={100}
              height={100}
              alt="circle"
              className="object-cover items-center -z-30 opacity-20 w-full"
            />
          </div>
          <div className="absolute hidden md:flex inset-auto -z-40 max-w-7xl px-10 w-full items-center justify-center h-full">
            <Image
              src={circle}
              width={100}
              height={100}
              alt="circle"
              className="object-cover items-center -z-30 opacity-20 w-full"
            />
          </div>
          <div className="absolute hidden md:flex inset-auto -z-40 max-w-[1840px] -mx-32 px-10 w-full items-center justify-center h-full">
            <Image
              src={circle1}
              width={100}
              height={100}
              alt="circle"
              className="object-cover items-center -z-30 opacity-20 w-full"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          ref={ref}
          initial={{ scale: 0.8 }}
          animate={controls}
          className="relative h-full flex flex-col max-md:mt-20 justify-start md:justify-center items-center w-full z-10"
        >
          {/* Your content goes here */}
          <div className="flex gap-3">
            <Image src={shoe} width={50} height={100} alt="shoe" />
            <Image src={trophy} width={50} height={100} alt="shoe" />
            <Image src={smile} width={50} height={100} alt="shoe" />
          </div>
          <div className="w-full flex max-md:gap-10 gap-3 flex-col">
            <h1 className="text-[7vw] md:text-[10vw] lg:text-[100px] font-black text-[#333333] font-mono-sans text-center  leading-[1.2em] tracking-[-2.6px]">
              {" "}
              walk, run <br /> and get{" "}
              <span className="text-[#E69C14]">paid</span>
            </h1>
            <div className="flex gap-4  justify-center w-full">
              <p className="font-medium   tracking-[-0.5px] leading-[1.5em] text-left text-[#666666] text-base md:text-[24px]">
                The ultimate way to earn rewards <br /> while you crush your
                fitness goals
              </p>
              <div className="px-3 hidden md:flex z-10 gap-4 max-h-[76px] justify-around rounded-2xl max-w-[200px] h-full items-center w-full relative bg-black/70 ">
                <h1 className="uppercase font-black font-mona-sans text-[14px] text-[#ffffff] ">
                  Download <br />
                  fitmint app
                </h1>
                <Image
                  src={qrCode}
                  className="max-w-full object-cover max-h-full"
                  width={50}
                  height={50}
                  alt="qrcode"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
