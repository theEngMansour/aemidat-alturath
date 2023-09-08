"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-green-100">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex mt-8">
                <Image src="/logo.svg" width={250} height={50} alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
              <div
                dir="rtl"
                className="flex flex-col justify-between flex-1 h-full text-center sm:text-right"
              >
                <div>
                  <h1 className="text-5xl font-bold mt-8 text-black sm:text-6xl xl:text-7x text-rightl">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed once, initially
                        "تركيب بيوت الشعر",
                        1000,
                        "خيام باكستانية",
                        1000,
                        "شرعات الماء",
                        1000,
                      ]}
                      speed={50}
                      className="font-black text-green-700"
                      repeat={Infinity}
                    />
                  </h1>
                  <p className="mt-6 text-base text-black sm:text-xl font-regular">
                    اعمده التراث لبيوت الشعر و الخيام و المظلات تبوك
                  </p>
                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400"
                    role="button"
                  >
                    {" "}
                    Get started for free{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
            <div className="lg:absolute lg:bottom-0 lg:left-0">
              <img
                className="w-full"
                src="/phone-mockup.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
