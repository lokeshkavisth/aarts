import React from "react";
import Button from "./Button";

function Cta() {
  return (
    <div className="py-[96px] px-[3%]">
      <div className="w-full max-w-[1170px] mx-auto bg-[#e34234]">
        <div className="flex flex-col items-center justify-center min-h-[380px] py-[96px] px-[42px]  ">
          <h2 className="text-[44px] text-white mb-[22px] font-semibold ">
            Ready? Let's co-create something great!
          </h2>
          <Button className={"mt-[32px]"}>Talk to us</Button>
        </div>
      </div>
    </div>
  );
}

export default Cta;
