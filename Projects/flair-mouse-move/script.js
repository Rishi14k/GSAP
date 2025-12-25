function playAnimation(shape) {
  let tl = gsap.timeline();

  tl.from(shape, {
    opacity: 0,
    scale: 0,
    ease: "elastic.out(1, 0.3)"
  })
  .to(shape, {
    rotation: "random([-360,360])"
  }, "<")
  .to(shape, {
    y: "120vh",
    ease: "back.in(.4)",
    duration: 1
  }, 0);
}

let flair = gsap.utils.toArray(".flair");
let gap = 100;
let index = 0;
let wrapper = gsap.utils.wrap(0, flair.length);

gsap.defaults({ duration: 1 });

let mousePos = { x: 0, y: 0 };
let lastMousePos = { x: 0, y: 0 };
let cachedMousePos = { x: 0, y: 0 };

window.addEventListener("mousemove", (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
});

gsap.ticker.add(ImageTrail);

function ImageTrail() {
  let travelDistance = Math.hypot(
    lastMousePos.x - mousePos.x,
    lastMousePos.y - mousePos.y
  );

  cachedMousePos.x = gsap.utils.interpolate(
    cachedMousePos.x || mousePos.x,
    mousePos.x,
    0.1
  );

  cachedMousePos.y = gsap.utils.interpolate(
    cachedMousePos.y || mousePos.y,
    mousePos.y,
    0.1
  );

  if (travelDistance > gap) {
    animateImage();
    lastMousePos = { ...mousePos };
  }
}

function animateImage() {
  let img = flair[wrapper(index)];

  gsap.killTweensOf(img);
  gsap.set(img, { clearProps: "all" });

  gsap.set(img, {
    opacity: 1,
    left: cachedMousePos.x,
    top: cachedMousePos.y,
    xPercent: -50,
    yPercent: -50
  });

  playAnimation(img);
  index++;
}
