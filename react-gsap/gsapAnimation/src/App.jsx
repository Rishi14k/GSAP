import React, {useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import makhi from "./assets/makhi.png";

const App = () => {
  const [xvalue, setXvalue] = useState(0);
  const [yvalue, setYvalue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomY = gsap.utils.random(-200, 200, 100);
  const rotateRandom = gsap.utils.random(-360, 360, 30);

  useGSAP(() => {
    gsap.to(".round img", {
      x: xvalue,
      y: yvalue,
      rotate: rotateValue,
      duration: 1,
    });
  }, [xvalue, yvalue, rotateValue]);
  return (
    <div>
      <main>
        <div className="cont">
          <button
            onClick={() => {
              setXvalue(randomX);
              setYvalue(randomY);
              setRotateValue(rotateRandom);
            }}
          >
            Animate
          </button>
          <div className="round">
            <img src={makhi} alt="img" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
