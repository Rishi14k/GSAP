function pageAnimation(){
    let tl = gsap.timeline()

tl.from("nav h2, nav a, nav button",{
    opacity:0,
    y:-25,
    duration:0.4,
    delay:0.2,
    stagger:0.15
})
tl.from(".maincontent #left h1, #left p, #left button",{
    x:-400,
    duration:0.5,
    opacity:0,
    stagger:0.15
})
tl.from("#right img",{
    x:400,
    duration:0.5,
    opacity:0,
    stagger:0.15
},"-=1")
tl.from(".iconbar img",{
    y:25,
    duration:0.4,
    stagger:0.12,
    opacity:0
})
}

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".card-con",
        scroll:"body",
        markers:true,
        start:"top 50%",
        end:"top top",
        scrub:2,
        // pin:true
    }
})

tl2.from(".card.left.f1",{
    x:-400,
    duration:0.8,
    opacity:0
},"anim1")
tl2.from(".card.right.f1",{
    x:400,
    duration:0.8,
    opacity:0
},"anim1")
tl2.from(".card.left.f2",{
    x:-400,
    duration:0.8,
    opacity:0
},"anim2")
tl2.from(".card.right.f2",{
    x:400,
    duration:0.8,
    opacity:0
},"anim2")