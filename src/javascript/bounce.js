import anime from "animejs/lib/anime.es.js";

document.addEventListener("DOMContentLoaded", () => {
    anime({
        targets: '.logo',
        translateY: 50,
        duration: 3000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true,
      });
});