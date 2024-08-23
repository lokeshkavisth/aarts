import React from "react";

function Awards() {
  return (
    <div className="pb-[70px] py-[96px] px-[3%] bg-[#f4f4f5]">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="mb-[96px] flex items-start justify-between">
          <div>
            <h2 className="pb-[20px] max-w-[590px] mr-[20px] text-[55px] font-bold text-[#2e2e36] leading-tight">
              Awards & Media Coverage
            </h2>
            <p className="max-w-[800px] text-[18px] font-medium text-[#69696e]">
              We've come a long way in these 6 years to be awarded as India's
              most recommended branding agency in 2021
            </p>
          </div>
        </div>

        {/* Cards */}

        <div className="grid gap-[16px] grid-cols-5">
          <div>
            <div className="p-[17px] mb-[50px] bg-white">
              <div className="flex items-center justify-center h-[272px]">
                <img
                  src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671289c976e2a6cb8652d6_Branding_India.png"
                  alt=""
                  className="w-auto h-[91%] block"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="p-[17px] mb-[50px] bg-white">
              <div className="flex items-center justify-center h-[272px]">
                <img
                  src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671274a2e8799cb3b684a8_Branding_Agencies_India_2021.png"
                  alt=""
                  className="w-auto h-[91%] block"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="p-[17px] mb-[50px] bg-white">
              <div className="flex items-center justify-center h-[272px]">
                <img
                  src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61a08db386755c51a6852257_Best%20UI-p-500.jpeg"
                  alt=""
                  className="w-auto h-[91%] block"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="p-[17px] mb-[50px] bg-white">
              <div className="flex items-center justify-center h-[272px]">
                <img
                  src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61a08db386755c51a6852257_Best%20UI-p-500.jpeg"
                  alt=""
                  className="w-auto h-[91%] block"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="p-[17px] mb-[50px] bg-white">
              <div className="flex items-center justify-center h-[272px]">
                <img
                  src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671289c976e2a6cb8652d6_Branding_India.png"
                  alt=""
                  className="w-auto h-[91%] block"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-[16px]">
          {/* Logos */}
          <div className="bg-white p-[17px]">
            <div className="h-[56px] flex items-center justify-center w-full">
              <img
                className="h-[56%] w-auto block max-w-full"
                src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671753573e2e51c83305c8_2560px-ICICI_Bank_Logo.svg.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white p-[17px]">
            <div className="h-[56px] flex items-center justify-center w-full">
              <img
                className="h-[56%] w-auto block max-w-full"
                src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671753573e2e51c83305c8_2560px-ICICI_Bank_Logo.svg.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white p-[17px]">
            <div className="h-[56px] flex items-center justify-center w-full">
              <img
                className="h-[56%] w-auto block max-w-full"
                src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671753573e2e51c83305c8_2560px-ICICI_Bank_Logo.svg.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white p-[17px]">
            <div className="h-[56px] flex items-center justify-center w-full">
              <img
                className="h-[56%] w-auto block max-w-full"
                src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671753573e2e51c83305c8_2560px-ICICI_Bank_Logo.svg.png"
                alt=""
              />
            </div>
          </div>

          <div className="bg-white p-[17px]">
            <div className="h-[56px] flex items-center justify-center w-full">
              <img
                className="h-[56%] w-auto block max-w-full"
                src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671753573e2e51c83305c8_2560px-ICICI_Bank_Logo.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
