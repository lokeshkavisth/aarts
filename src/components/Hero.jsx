import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="mt-[100px]">
        <h2 className="mb-[11px] text-[40px]">Crafting brands globally with</h2>
        <h1 className="text-[155px] font-bold">Purpose</h1>
      </div>
      <div className="mt-[35px] flex items-center">
        <Button>View our work</Button>
        <span className="ml-[30px]">Know us better</span>
      </div>
    </div>
  );
}

export default Hero;
