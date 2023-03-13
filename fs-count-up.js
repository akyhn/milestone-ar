const countNumber = document.querySelector("[fs-countUp='number']");
let endNumber = countNumber.textContent();

gsap.to(countNumber, { innerText: 950, duration: 3, 
    snap: {
      innerText:5
    } 
});

console.log("Hello World")
