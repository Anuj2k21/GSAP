// gsap.to("#box", {
//   // gsap.to me object initial se final  positin tak jata hai
//   x: 900,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

// gsap.from("#box", {
//   // gsap.from me object  final initial se  positin tak jata hai
//   x: 900,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

// gsap.to("h1", {
//   x: 600,
//   color: "blue",
//   duration: 2,
//   //   delay: 1,
//   stagger: 1,
//   repeat: -1,
//   yoyo: true,
// });
var tl = gsap.timeline();
tl.to("h1", {
  x: 600,
  duration: 1,
});

tl.to("h2", {
  x: 700,
  duration: 1,
});
tl.to("h3", {
  x: 800,
  duration: 1,
});
