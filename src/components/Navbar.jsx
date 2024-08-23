import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between min-h-[92px] py-[28px] px-[3%] max-w-[1400px] mx-auto">
      <div className="mr-[40px] my-[10px] ">
        <img
          className="w-[122px] max-w-full inline-block"
          src="https://cdn.prod.website-files.com/5f4631e12211665a29dc65cb/61671380ac4ebb6b93e36f89_Aarts%20White%20Logo%20PNG%20with%20registered%20mark-p-500.png"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-4">
          <li className="py-[20px] px-[24px] text-[#ffe9e9b3] hover:text-white">
            Work
          </li>
          <li className="py-[20px] px-[24px] text-[#ffe9e9b3] hover:text-white">
            Services
          </li>
          <li className="py-[20px] px-[24px] text-[#ffe9e9b3] hover:text-white">
            Who we are
          </li>
          <li className="py-[20px] px-[24px] text-[#ffe9e9b3] hover:text-white">
            Blog
          </li>
        </ul>
        <Button className={"ml-[30px]"}>Let's talk</Button>
      </div>
    </div>
  );
}

export default Navbar;
