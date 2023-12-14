function initialize() {
  window.addEventListener("scroll", moveImageWhenUserScrolls)
}

function moveImageWhenUserScrolls() {
  const SCROLL_POSITION = window.scrollY;
  const CLOUD = document.getElementById("cloud");
  const AIR_BALLOON = document.getElementById("air-balloon");

  CLOUD.style.left = (SCROLL_POSITION) * 0.15 + "px";
  AIR_BALLOON.style.left = -(SCROLL_POSITION) * 0.9 + "px";
}

initialize();