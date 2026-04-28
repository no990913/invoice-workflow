// ── SCROLL REVEAL ANIMATION ──
// Watches each step and decision block.
// When an element enters the viewport, it gets the 'visible' class
// which triggers the CSS transition (fade + slide in from left).

const animatedElements = document.querySelectorAll('.step, .decision-block, .threshold-block');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching once revealed
    }
  });
}, {
  threshold: 0.1,           // trigger when 10% of element is visible
  rootMargin: '0px 0px -40px 0px' // slightly before it fully enters viewport
});

// Apply staggered delay and start observing each element
animatedElements.forEach((el, index) => {
  el.style.transitionDelay = (index * 40) + 'ms';
  observer.observe(el);
});
