import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import React, {useContext, useRef} from "react";
import {NavbarContext} from "../../context/NavContext";
import { MdOutlineClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";


const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavbarContext);
//   console.log(navOpen);
const navigate = useNavigate()

  const fullNavRef = useRef(null);
  const fullScreenRef = useRef(null);


  function gsapAnimation() {
    const tl = gsap.timeline();

    tl.to(".fullscreennav",{
      display:"block"
    })
    tl.to(".stairFullNav", {
      delay:0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    // tl.to(fullNavRef.current, {
    //   opacity: 1,
    // });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,   
      },
    });
    tl.to(".navlink",{
        opacity:1
    })
  }

  function reverseGsapAnimation(){
    const tl = gsap.timeline()
    tl.to(".link",{
      opacity:0,
      rotateX:90,
      stagger:{
        amount:0.1
      }
    })
    tl.to(".stairFullNav",{
      height:0,
      stagger:{
        amount:0.1
      }
    })
    tl.to(".navlink",{
      opacity:0
    })
    tl.to(".fullscreennav",{
      display:"none"
    })
  }
  useGSAP(() => {
  
    if (navOpen) {
        // gsap.to(".fullscreennav",{
        //     display:'block'
        // })
        gsapAnimation()
    } else {
        // gsap.to(".fullscreennav",{
        //     display:"none"
        // })
        reverseGsapAnimation()
    }
  }, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav hidden w-full h-screen absolute z-50"
    >
      <div className="fixed h-screen w-full">
        <div className="h-full w-full flex top-0">
          <div className="stairFullNav h-full w-1/4 bg-black/95"></div>
          <div className="stairFullNav h-full w-1/4 bg-black/95"></div>
          <div className="stairFullNav h-full w-1/4 bg-black/95"></div>
          <div className="stairFullNav h-full w-1/4 bg-black/95"></div>
          <div className="stairFullNav h-full w-1/4 bg-black/95"></div>
        </div>
      </div>

      <div ref={fullNavRef} className="relative">
        <div className="navlink flex w-full justify-between p-5 items-center">
          <div onClick={()=>{
            navigate("/")
            setNavOpen(false)
          }} className="logo">
            <div className="w-36">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                height="44"
                viewBox="0 0 103 44"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>

          <div onClick={()=>setNavOpen(false)} className="h-24 w-24 relative cursor-pointer">
            {/* <div className="h-40 w-1 -rotate-45 origin-top absolute bg-[#d3fd50]"></div>
            <div className="h-40 w-1 rotate-45 origin-top absolute right-0 bg-[#d3fd50]"></div> */}
            <MdOutlineClose className="w-full h-full"/>

          </div>
        </div>

        <div className=" lg:py-40 py-56">
          <div className="link origin-top relative border-y">
            <h1 className="font-[font2] text-[12vw] lg:text-[6vw] leading-[10vw] lg:leading-[5.2vw] pt-2 uppercase text-center">
             Projects
            </h1>

            <div onClick={()=>{
              navigate('/projects')
              setNavOpen(false)
            }} className="moveLink flex gap-4 absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>

              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEE EVERYTHING
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y">
            <h1 className="font-[font2] text-[12vw] lg:text-[6vw] leading-[10vw] lg:leading-[5.2vw] pt-2 uppercase text-center">
           Agence
            </h1>

            <div onClick={()=>{
              navigate('/agence')
              setNavOpen(false)
            }} className="moveLink cursor-pointer flex gap-4 absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  KNOW US
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  KNOW US
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>

              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  KNOW US
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  KNOW US
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y">
            <h1 className="font-[font2] text-[12vw] lg:text-[6vw] leading-[10vw] lg:leading-[5.2vw] pt-2 uppercase text-center">
              CONTACT
            </h1>

            <div className="moveLink flex gap-4 absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEND US A FAX
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEND US A FAX
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>

              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEND US A FAX
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  SEND US A FAX
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="link origin-top relative border-y">
            <h1 className="font-[font2] text-[12vw] lg:text-[6vw] leading-[10vw] lg:leading-[5.2vw] pt-2 uppercase text-center">
            BLOG
            </h1>

            <div className="moveLink flex gap-4 absolute bg-[#d3fd50] text-black top-0">
              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  READ ARTICLES
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  READ ARTICLES
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>

              <div className="moveX flex gap-4 items-center">
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  READ ARTICLES
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"
                  alt="img"
                />
                <h2 className="font-[font2] whitespace-nowrap text-[6vw] leading-[5.2vw] pt-2 uppercase text-center">
                  READ ARTICLES
                </h2>
                <img
                  className="rounded-full w-72 h-24 shrink-0"
                  src="https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
