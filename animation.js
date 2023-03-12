// select all paragraphs
const paragraphs = document.querySelectorAll(".article-rich-text p");
const headers = document.querySelectorAll(".article-rich-text *");

const duration = 1.2;

// loop through each paragraph
paragraphs.forEach((paragraph) => {
  // set initial opacity to 0
  paragraph.style.opacity = 0;

  // create a timeline for each paragraph
  const tl = gsap.timeline({
    //delay: 0.25, // delay the animation by 250ms
    ease: "power1.inOut"
  });

  // add a fade-in animation to the timeline
  tl.to(paragraph, {
    duration: duration, // animate over 500ms
    opacity: 1 // animate to 100% opacity
  });

  // use ScrollTrigger to trigger the timeline when the paragraph enters the viewport
  ScrollTrigger.create({
    trigger: paragraph,
    start: "top 90%", // trigger when the top of the paragraph enters the bottom of the viewport
    once: true, // only trigger once
    animation: tl // use the timeline for the animation
  });
});
// loop through each paragraph
headers.forEach((header) => {
  // set initial opacity to 0
  header.style.opacity = 0;

  // create a timeline for each paragraph
  const tl = gsap.timeline({
    //delay: 0.25, // delay the animation by 250ms
    ease: "power1.inOut"
  });

  // add a fade-in animation to the timeline
  tl.to(header, {
    duration: duration, // animate over 500ms
    opacity: 1 // animate to 100% opacity
  });

  // use ScrollTrigger to trigger the timeline when the paragraph enters the viewport
  ScrollTrigger.create({
    trigger: header,
    start: "top 90%", // trigger when the top of the paragraph enters the bottom of the viewport
    once: true, // only trigger once
    animation: tl // use the timeline for the animation
  });
});
