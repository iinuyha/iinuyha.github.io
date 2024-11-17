const randomInt = Math.ceil(Math.random() * 7);

const bgImage = document.createElement("img");

bgImage.src = `img/${randomInt}.jpg`;

bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.objectFit = "cover";
bgImage.style.zIndex = "-10";

document.body.appendChild(bgImage);
