import React, {useEffect, useEffectEvent, useRef} from "react";
import Video from "./Video";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const HeroText = () => {
  const ovalRef = useRef(null);
  useGSAP(() => {
    const length = ovalRef.current.getTotalLength();

    gsap.set(ovalRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0,
    });

    const tl = gsap.timeline({repeat: -1, repeatDelay: 1});

    tl.to(ovalRef.current, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    })
      .to({}, {duration: 2}) // pause
      .to(ovalRef.current, {
        strokeDashoffset: -length,
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
      });
  });

  return (
    <div className="font-[font1]">
      <div className="lg:text-[9vw] text-[12vw] lg:mt-0 mt-[32rem] uppercase leading-[12vw] lg:leading-[8vw] text-center">
        The spark for
      </div>
      <div className="lg:text-[9vw] text-[12vw] uppercase leading-[12vw] lg:leading-[8vw] text-center flex items-center justify-center">
        all
        <div className="lg:w-[14vw] lg:h-[7vw] w-[22vw] h-[10vw] rounded-full overflow-hidden object-center">
          <Video src="https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6" />
        </div>
        things
      </div>
      <div className="relative w-fit m-auto">
        <div className="lg:text-[9vw] text-[12vw] uppercase m-auto leading-[12vw] lg:leading-[10vw] text-center">
          creative
        </div>

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <ellipse
            ref={ovalRef}
            cx="50"
            cy="20"
            rx="48"
            ry="18"
            fill="none"
            stroke="#d3f350"
            strokeWidth="1.5"
            className="oval-path"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroText;
