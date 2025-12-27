import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useLocation} from "react-router-dom";
const StairAnimation = (props) => {
  const pageRef = useRef(null);
  const currentPath = useLocation().pathname;
  const stairRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(stairRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [currentPath]);
  return (
    <>
      <div ref={stairRef} className="h-screen w-full z-10 fixed top-0">
        <div className="h-full w-full flex top-0">
          <div className="stair h-full w-1/4 bg-black"></div>
          <div className="stair h-full w-1/4 bg-black"></div>
          <div className="stair h-full w-1/4 bg-black"></div>
          <div className="stair h-full w-1/4 bg-black"></div>
          <div className="stair h-full w-1/4 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{props.children}</div>
    </>
  );
};

export default StairAnimation;
