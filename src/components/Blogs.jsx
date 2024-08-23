import React from "react";

function Blogs() {
  return (
    <div className="pt-[96px] bg-white  px-[3%] pb-[40px]">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="mb-[96px] flex items-start justify-between">
          <div>
            <h2 className="pb-[20px] max-w-[590px] mr-[20px] text-[55px] font-bold text-[#2e2e36] leading-tight">
              We help you in making informed decisions
            </h2>
            <p className="max-w-[800px] text-[18px] font-medium text-[#69696e]">
              Read our latest articles and keep up to date with the trends
            </p>
          </div>
          <a href="/" className="mt-[28px] inline-block">
            <div className="mb-[5px] border-b text-[#e34234] border-b-[#e34234] ">
              View all blogs
            </div>
          </a>
        </div>

        {/* Blog Cards */}

        <div>
          <div className="grid grid-cols-2 gap-x-[50px] gap-y-[16px]">
            <div>
              <div className="p=[17px] mb-[50px]">
                <a href="" className="text-[#2e2e36] inline-block max-w-full">
                  <div className="overflow-hidden">
                    <img
                      src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/602f5221ad61e9b57640c82e_2%20%20Image%20after%20Index_Ed7-min.jpg"
                      className="w-full max-w-full inline-block transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="flex-col justify-between items-start flex pt-[16px]">
                    <h3 className="my-[10px] text-[24px] font-bold text-[#2e2e36]">
                      KIA launches its new logo - Quick Review
                    </h3>
                    <p className="text-[#2e2e36] pb-[12px] ">
                      Kia launches its new logo, reveals it through fireworks.
                      Does the new logo justify their new brand message? A quick
                      critic review.
                    </p>
                    <div className="mt-[25px] flex">
                      <div className="text-[16px] inline-block">
                        <div className="mb-[5px] border-b border-b-[#e34234] text-[#e34234]">
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <div className="p=[17px] mb-[50px]">
                <a href="" className="text-[#2e2e36] inline-block max-w-full">
                  <div className="overflow-hidden">
                    <img
                      src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/602f5221ad61e9b57640c82e_2%20%20Image%20after%20Index_Ed7-min.jpg"
                      className="w-full max-w-full inline-block transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="flex-col justify-between items-start flex pt-[16px]">
                    <h3 className="my-[10px] text-[24px] font-bold text-[#2e2e36]">
                      Has google made its logo-set consistent?
                    </h3>
                    <p className="text-[#2e2e36] pb-[12px] ">
                      Google tried to make all the logos coherent using the same
                      design language across, but to a lot of users, now they
                      all look the same.
                    </p>
                    <div className="mt-[25px] flex">
                      <div className="text-[16px] inline-block">
                        <div className="mb-[5px] border-b border-b-[#e34234] text-[#e34234]">
                          Learn More
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
