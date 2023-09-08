"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-green-100">
      <header className="w-full pt-4">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16 lg:h-20">
            <div className="flex-shrink-0">
              <span title="" className="flex mt-8">
                <Image src="/logo.svg" width={250} height={50} alt="" />
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl pb-10 md:pb-32">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex font-regular px-4 py-2 text-base text-green-700 border border-gray-200 rounded-full font-pj">
              مرحباً بكم
            </p>
            <h1
              dir="rtl"
              className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj"
            >
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "تركيب بيوت الشعر",
                  1000,
                  "تركيب خيام باكستانية",
                  1000,
                  "تركيب شرعات الماء",
                  1000,
                ]}
                speed={50}
                className="font-black text-green-700"
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600 font-regular">
              أعمدة التراث لبيوت الشعر و الخيام و المظلات تبوك
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
