import React from "react";
import Video from "./Video";

const HeroText = () => {
  return (
    <div className="font-[font1]">
      <div className="text-[9vw] uppercase leading-[8vw] text-center">The spark for</div>
      <div className="text-[9vw] uppercase leading-[8vw] text-center flex items-center justify-center">all
            <div className="w-[14vw] h-[7vw] rounded-full overflow-hidden">
                <Video/>
            </div>
        things</div>
      <div className="text-[9vw] uppercase leading-[10vw] text-center">creative</div>
    </div>
  );
};

export default HeroText;
