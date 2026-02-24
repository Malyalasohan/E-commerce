var navLinks = document.querySelectorAll("#nav ul li a");
navLinks.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2.5;
    crsr.style.border = "1px solid #00aaff"; // Blue border
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #00aaff";
    crsr.style.backgroundColor = "#00aaff"; // Blue default color
  });
});

gsap.to("#nav", {
  backgroundColor: "#000", // Dark theme navbar
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000", // Black background
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// Cards Animation - Fashion, Electronics, Lifestyle
gsap.from(".card", {
  scale: 0.85,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

// Scroller Text Animation
gsap.to("#scroller-in", {
  x: "-100%",
  repeat: -1,
  duration: 40,
  ease: "linear",
});

// Footer Social Icons Hover Effect
var socialIcons = document.querySelectorAll(".follow ul li a i");
socialIcons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.color = "#00aaff"; // Blue hover effect
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.color = "#000"; // Default color
  });
});
