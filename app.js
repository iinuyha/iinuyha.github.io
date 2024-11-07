const title = document.querySelector("div.hello h1");

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  console.log("mouse in here!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
