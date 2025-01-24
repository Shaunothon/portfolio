/* job title movement */
/*
anime({
  targets: ".job-title",
  translateX: 250,
  endDelay: 1000,
  direction: "alternate",
});
*/

/* mobile navigation */
const mnav = function () {
  const m = document.querySelector("#mobileMenu");
  m.classList.toggle("show");
  event.preventDefault();
};

/* occupation dance animation */
anime({
  targets: ".job-title",
  translateX: 250,
  scale: 1,
  rotate: "1turn",
  direction: "alternate",
});

/* Contacts */

var tl = anime.timeline({
  targets: ".glogo, .llogo, .gitlogo",
  delay: function (el, i) {
    return i * 200;
  },
  duration: 500, // Can be inherited
  easing: "easeOutExpo", // Can be inherited
  direction: "alternate", // Is not inherited
  loop: true, // Is not inherited
});

tl.add({
  translateX: 40,
  // override the easing parameter
  easing: "spring",
})
  .add({
    opacity: 0.5,
    scale: 2,
  })
  .add({
    // override the targets parameter
    targets: ".params-inheritance-demo .el.triangle",
    rotate: 180,
  })
  .add({
    translateX: 0,
    scale: 1,
  });
