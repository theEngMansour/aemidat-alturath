export default function Contact() {
    return (
      <div dir="rtl" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  تواصل
                </h2>
                <p className="mt-4 leading-7 font-regular text-gray-600">
                  متوفرين طوال الاسبوع من 8 صباحاً الى 11 قبل منتصف الليل
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="font-bold font-semibold leading-7 text-gray-900">
                    الايميل
                  </h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a
                          className="font-semibold text-green-700"
                          href="mailto:amadh50008@gmail.com"
                        >
                          amadh50008@gmail.com
                        </a>
                      </dd>
                    </div>
                    <div className="mt-1">
                      <dt className="font-regular">رقم الهاتف</dt>
                      <dd>+966560750008</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  الموقع
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="font-bold font-semibold leading-7 text-gray-900">
                    السعودية - تبوك
                  </h3>
                  <address className="mt-3 font-regular space-y-1 text-sm not-italic leading-6 text-gray-600">
                    <p>
                      {" "}
                      الامام عبدالله بن فيصل بن تركي، العوايشة، تبوك 47914،
                      السعودية
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  