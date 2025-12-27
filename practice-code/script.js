// gsap.from("#page1 #box",{
//     y:30,
//     scale:0,
//     duration:2,
//     delay:0.5,
//     rotate:360
// })
// gsap.from("#page2 #box",{
//     y:30,
//     scale:0,
//     duration:1,
//     rotate:180,
//     opacity:0,
//     // scrollTrigger:"#page2 #box"
//     scrollTrigger:{
//         scroll:"body",
//         trigger:"#page2 #box",
//         markers:true,
//         start:"top 60%",
//         end: "top 30%",
//         scrub:2
//     }
// })

// gsap.to("#page2 h1",{
//     xPercent:-65,
//     scrollTrigger:{
//         trigger:"#page2",
//         scroll:"body",
//         start:"top 0%",
//         end:"top -150%",
//         scrub:2,
//         markers:true,
//         pin:true
//     }
// })

// var initialPath = "M 10 100 Q 500 100 990 100"
// var finalPath = "M 10 100 Q 500 100 990 100"

// var string  = document.querySelector("#string")
// string.addEventListener("mousemove",(dets)=>{
//     path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
//     gsap.to("svg path", {
//         attr:{
//             d:path,
//             ease:"power3.out",
//             duration:"0.2"
//         }
//     })
// })
// string.addEventListener("mouseleave",()=>{
//     gsap.to("svg path", {
//         attr:{
//             d:finalPath,
//             duration:1.5,
//             ease: "elastic.out(1,0.3)",
//         }
//     })
// })

// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")

// main.addEventListener("mousemove", (dets)=>{
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         ease:"back.out",
//         duration:1
//     })
// })

// var menu = document.querySelector("#cont")
// var tl = gsap.timeline()
// var close1 = document.querySelector("#full i")

// tl.to("#full",{
//     right:0,
//     duration:0.8
// })
// tl.from("#full h4", {
//     opacity:0,
//     x:120,
//     stagger:0.3
// })
// tl.from("#full i",{
//     opacity:0
// })
// tl.pause()

// menu.addEventListener("click",()=>{
//     tl.reverse() ? tl.play() : tl.reverse()
// })
// close1.addEventListener("click",()=>{
//     console.log("object")
//    tl.reversed(true);
// })

// function splitTextSpan(){

// var h1 = document.querySelector("h1")
// var textCont = h1.textContent

// var spanValue = textCont.split("")
// var halfVal = spanValue.length / 2
// var clutter = ""
// spanValue.forEach((e, idx)=>{
//     if(idx < halfVal){

//         clutter+=`<span class="a">${e}</span>`
//     }else{
//         clutter+=`<span class="b">${e}</span>`
//     }
// })
// h1.innerHTML = clutter
// }
// splitTextSpan()

// gsap.from("h1 span.a",{
//     y:30,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
//     stagger:0.15
// })
// gsap.from("h1 span.b",{
//     y:30,
//     duration:0.6,
//     delay:0.5,
//     opacity:0,
//     stagger:-0.15
// })

window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    gsap.to(".marquee", {
      transform: "translateX(-200%)",
      repeat: -1,
      ease: "none",
      duration: 4,
    });
    gsap.to("marquee img", {
      rotate: 180,
    });
  } else {
    gsap.to(".marquee", {
      transform: "translateX(0%)",
      repeat: -1,
      ease: "none",
      duration: 4,
    });
    gsap.to("marquee img", {
      rotate: 90,
    });
  }
});
