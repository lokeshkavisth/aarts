import React from "react";

function Slider() {
  return (
    <div className="flex items-center max-w-[1170px] min-h-[132px] mx-auto py-[24px] px-[30px] relative -top-[37px] bottom-0 left-0 right-0 bg-white gap-1 shadow-md">
      <div className="w-full max-h-[100px] bg-[#ddd] h-[300px]" />
      <div className="w-full max-h-[100px] bg-[#ddd] h-[300px]" />
      <div className="w-full max-h-[100px] bg-[#ddd] h-[300px]" />
      <div className="w-full max-h-[100px] bg-[#ddd] h-[300px]" />
    </div>
  );
}

export default Slider;
