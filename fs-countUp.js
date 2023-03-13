const countNumber = document.querySelector("[fs-countUp='number']");
let endNumber = countNumber.innerHTML("")

gsap.to(countNumber, { innerText: 950, duration: 3, 
    snap: {
      innerText:5
    } 
    });
