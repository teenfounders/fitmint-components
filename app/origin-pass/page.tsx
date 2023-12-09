import Image from "next/image";
import React from "react";
import logo1 from "@/public/logo (1).svg";
import insta from "@/public/footerinsta.svg";
import tele from "@/public/footertelegram.svg";
import twi from "@/public/footertwitter.svg";
import dis from "@/public/footerdiscord.svg";

type Props = {};

const Originpage = (props: Props) => {
  return (
    <>
      <div className="bg-[#f1e2c8] md:bg-[#E69C14]/30 -z-10 top-0 absolute inset-0 blur-[32rem] h-screen min-w-full "></div>

      <div className="w-full overflow-hidden  h-full relative flex  max-md:px-8   flex-col items-center justify-center">
        <div className="max-w-3xl w-full h-full relative ">
          <header className="flex w-full justify-between  items-center">
            <Image src={logo1} width={100} height={30} alt="logo" />

            <button className="py-[13px] pl-[18px] pr-[15px] text-black font-bold bg-white rounded-xl leading-3 border-[1px] border-black/30 font-mono-sans text-xs">
              LOGIN
            </button>
          </header>
          <div className="px-0 w-full mt-16 md:mt-32">
            <div className="pb-32 flex max-md:flex-col-reverse gap-x-16 ">
              <div className="pt-10 grow shrink basis-0 flex-col flex">
                <div className="text-[56px]  leading-[54px] font-mono-sans text-black">
                  <p className="">
                    honouring our
                    <span className="italic">Origin</span>
                  </p>
                </div>
                <div className="text-gray-500 leading-5 font-normal mb-8 mt-3">
                  Introducing the Origin Pass for our early believers, to unlock
                  the future.
                </div>
                <button className="py-[17px] px-[18px] font-bold bg-[#2c2c2d] text-[#fff] rounded-[30px] leading-[21.81px] font-mono-sans text-sm w-full transition-all duration-300 cursor-pointer uppercase hover:opacity-90 ease-in-out ">
                  Claim Now
                </button>
                <p className="underline mt-3 text-slate-500 text-xs leading-4 w-full items-center flex justify-center">
                  What's an Origin pass?
                </p>
              </div>
              <div className="flex grow shrink basis-0  ">
                <div className="max-w-3xl ">
                  <video
                    playsInline
                    loop
                    autoPlay
                    muted
                    id="vid"
                    className="border-2 border-black/30 rounded-[30px] w-full h-auto"
                  >
                    <source src="/origin-pass-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="w-full h-full ">
              <div className="max-w-[352px]">
                <Image
                  src={"/origin-pass-2.svg"}
                  width={100}
                  height={100}
                  className=" w-full h-auto block align-middle"
                  alt="image"
                />
              </div>
              <div className="text-slate-500 font-extralight max-md:flex-col gap-x-16 flex mt-8">
                <div className="">
                  In an ever-evolving crescendo of possibilities. One of these
                  possibilities, on which we're working on, is to make the world
                  fitter. Getting you closer to your future self - a healthier
                  you.
                  <br />
                  <br />
                  Get ready to embark on this new adventure with Fitmint 2.0,
                  where you are empowered with an avatar, a version of yourself
                  who is the hero of our new game.
                  <br />
                  <br />
                  Start as a Rookie and make the hero's journey to become the
                  Greatest Of All Time (G.O.A.T.)!
                  <br />
                  <br />
                  But, as a new chapter begins, we also want to honour our
                  ORIGINS.
                  <br />
                  <br />
                  When we began our project, enthusiasts from all over the world
                  came to join us on our mission. We went through some great
                  changes & challenges - the whole nine yards, together.
                </div>
                <div className="">
                  Now, on our new adventure, we're making sure that you get
                  exclusive access like no one else. And to get that access, for
                  a lifetime, you'll be getting the Origin Pass NFT.
                  <br />
                  <br />
                  We'll be opening the doors to our power-packed premium
                  features for free, just for our Origin Pass holders! Features
                  for which every other Fitminter would have to purchase a
                  monthly/annual subscription to experience.
                  <br />
                  <br />
                  In addition to this, Origin Pass holders would also get access
                  to UltraFIT 2.0 Contest, where they can win real cash prizes
                  from a weekly prize pool of 3000+ USDC!
                  <br />
                  <br />
                  Only 15,619 limited edition Origin Pass NFTs would be minted,
                  which would soon be tradable on the Marketplace, at a price of
                  your choosing. And there's a lot more coming, stay tuned.
                  <br />
                  <br />
                  <div className="font-mono-sans flex gap-2 flex-wrap text-black text-lg">
                    enter
                    <p className="font-mono-sans underline text-black">
                      fitmint 2.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/achievements-banner.svg"}
            width={100}
            height={100}
            className="md:mt-64  max-md:scale-230 w-screen mt-48 block align-middle"
            alt="image"
          />
        </div>
        <footer className="md:pt-32 md:mt-32 relative max-w-4xl   w-full items-center z-30 h-[700px] ">
          <div className="md:px-12 py-16  flex-col flex mx-auto ">
            <div className="md:items-end md:flex-row justify-between items-start flex-col flex mt-32">
              <div className="md:mb-0 flex-col flex mb-8 ">
                <Image
                  src={"/footerlogo2.svg"}
                  width={100}
                  height={100}
                  alt="image"
                  className="md:w-full w-3/4 "
                />
                <p className="my-2 opacity-50 text-black underline ">
                  Read more abou the fitmint 2.0
                </p>
              </div>
              <div className="md:items-end items-start justify-between gap-3 flex-col flex ">
                <div className="flex flex-row  space-x-2">
                  <Image
                    src={insta}
                    width={30}
                    height={30}
                    className=" "
                    alt="image"
                  />
                  <Image
                    src={tele}
                    width={30}
                    height={30}
                    className=" "
                    alt="image"
                  />
                  <Image
                    src={twi}
                    width={30}
                    height={30}
                    className=" "
                    alt="image"
                  />
                  <Image
                    src={dis}
                    width={30}
                    height={30}
                    className=" "
                    alt="image"
                  />
                </div>
                <div className="opacity-50">hello@fitmint.io</div>
              </div>
            </div>
            <p className="opacity-50 font-medium text-sm mt-16 ">
              © Fitmint | All rights reserved •
              <span className="text-black ">privacy policy</span>
            </p>
          </div>
        </footer>
        <div className="bg-[#f1e2c8] md:bg-[#E69C14]/30 absolute bottom-[-6rem] -z-10 right-[1rem] h-[21.25rem] w-[21.25rem] rounded-full blur-[14rem] sm:w-[68.75rem]"></div>
      </div>
    </>
  );
};

export default Originpage;
