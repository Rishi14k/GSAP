const main = document.querySelector('.main');

gsap.set(main,{perspective:650})

const outerX = gsap.quickTo('.logo-outer','rotationX',{ease:"power3"})
const outerY = gsap.quickTo('.logo-outer','rotationY',{ease:"power3"})

const innerX = gsap.quickTo('.logo',"x",{ease:"power3"})
const innerY = gsap.quickTo('.logo',"y",{ease:"power3"})

main.addEventListener('mousemove',(e)=>{
    outerX(gsap.utils.interpolate(15,-15,e.y/window.innerHeight))
    outerY(gsap.utils.interpolate(-15,15,e.x/window.innerWidth))
    innerX(gsap.utils.interpolate(-30,30,e.x/window.innerWidth))
    innerY(gsap.utils.interpolate(-30,30,e.y/window.innerHeight))
})

main.addEventListener('mouseleave',()=>{
    outerX(0)
    outerY(0)
    innerX(0)
    innerY(0)
})

