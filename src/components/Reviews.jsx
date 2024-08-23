import React from "react";
import Carousel from "./Testimonial";

function Reviews() {
  return (
    <div className="py-[96px] px-[3%] bg-gray-100">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="mb-[96px] flex items-start justify-between">
          <div>
            <h2 className="pb-[20px] max-w-[590px] mr-[20px] text-[55px] font-bold text-[#2e2e36] leading-tight">
              But don't take our word for it
            </h2>
            <p className="max-w-[800px] text-[18px] font-medium text-[#69696e]">
              Hear it from the clients, their real experiences.
            </p>
          </div>
          <a href="/" className="mt-[28px] inline-block">
            <div className="mb-[5px] border-b text-[#e34234] border-b-[#e34234] ">
              View Verified Reviews
            </div>
          </a>
        </div>

        <Carousel />
      </div>
    </div>
  );
}

export default Reviews;
