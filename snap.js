document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector("[fs-snap-sections='wrapper']");
  let items = Array.from(wrapper.children);
  let item = gsap.utils.toArray(wrapper.children);
  // Initialize ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Set up ScrollTrigger to snap to each panel
  ScrollTrigger.create({
    trigger: wrapper,
    snap: 1.15 / (items.length - 1),
    scrub: 1,
    markers: false,
    start: "top center"
  });

  console.log(items);
});
