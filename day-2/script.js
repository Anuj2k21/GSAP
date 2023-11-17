var tl = gsap.timeline();

tl.from("#nav img , #nav h3 ,#nav-part3 h4 ,#nav-part3 button", {
  y: -100,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
});

tl.from("h1", {
  y: 100,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
});
tl.from("#main>img", {
  opacity: 0,
  scale: 0,
});
tl.from("h5", {
  scale: 0,
  opacity: 0,
});
tl.to("h5", {
  y: 30,
  repeat: -1,
  duration: 1,
  yoyo: true,
});
