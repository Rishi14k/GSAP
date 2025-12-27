import React, {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imgRef = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a2",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
    "https://k72.ca/images/teamMembers/Isa_640X960.jpg?w=640&h=960&s=5849bb72bb04be156ba2ff4048eb65b8",
  ];

  useGSAP(()=>{
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        start:"top 20%",
        end:"top -100%",
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pintType:'transform',
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(e)=>{
          let imageIndex;
          if(e.progress < 1){
            imageIndex = Math.floor(e.progress * imageArray.length)
          }else{
            imageIndex = imageArray.length - 1
          }
          imgRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className="section1 relative py-1">
        <div
          ref={imageDivRef}
          className="absolute -z-1 overflow-hidden rounded-4xl top-60 left-[32.5vw] w-[12vw] h-[17vw]"
        >
          <img
            ref={imgRef}
            className="w-full h-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
            alt="img"
          />
        </div>

        <div className="font-[font1] relative">
          <div className="mt-[50vh] text-[19vw] leading-[17.5vw] text-center">
            <h1>
              SEVEN7Y <br />
              TWO
            </h1>
          </div>

          <div className="pl-[40%] mt-10">
            <p className="text-6xl text-left">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
