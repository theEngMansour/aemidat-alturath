import React from "react";

export default function Steps() {
  return (
    <section dir="rtl" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            الخدمات
          </h2>
          <p className="max-w-lg mx-auto mt-4 font-regular text-base leading-relaxed text-gray-600">
            خدماتنا الذي نقدمها بشكل مميز
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#29ae5c] border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-bold text-gray-700"> 1 </span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-tight text-black md:mt-10">
                تركيب بيوت الشعر 5 طبقات
              </h3>
              <p className="mt-4 text-base font-regular text-gray-600">
                اجمل بيوت شعر ذات التصميمات الراقية والالوان الجميلة تستخدم بيوت
                الشعر للجلسات العائلية والترحاب بالضيوف والأحباب وقضاء أسعد
                الأوقات بها
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#e4342d] border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-bold text-gray-700"> 2 </span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-tight text-black md:mt-10">
                خيام باكستانية جديدة
              </h3>
              <p className="mt-4 text-base font-regular text-gray-600">
                خيام باكستانية المقاسات جميعها متوفره قوية جدا وجودتها عالية
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#fdbc18] border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-bold text-gray-700"> 3 </span>
              </div>
              <h3 className="mt-6 text-xl font-bold leading-tight text-black md:mt-10">
                شرعات الماء
              </h3>
              <p className="mt-4 text-base font-regular text-gray-600">
                شرعات ماء كورية على الشرط و ضمان عروض خاصه و حصريه
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
