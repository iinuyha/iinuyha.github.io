const title = document.querySelector("div.hello h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  title.classList.toggle(clickedClass);
}

title.addEventListener("click", handleTitleClick);
