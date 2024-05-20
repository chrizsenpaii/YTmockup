
  window.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel");

    function checkOverflow() {
      const isOverflowing = carousel.scrollWidth > carousel.clientWidth;
      carousel.classList.toggle("overflow-hidden", !isOverflowing);
    }

    window.addEventListener("resize", checkOverflow);
    checkOverflow();
  });

