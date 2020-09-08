import gallery from "./gallery-items.js";

const ul = document.querySelector("ul.js-gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('[data-action="close-lightbox"]');

gallery.forEach((item) => {
  let li = document.createElement("li");
  li.classList.add("gallery__item");
  ul.append(li);
  let a = document.createElement("a");
  a.classList.add("gallery__link");
  a.setAttribute("href", item.original);
  li.append(a);
  let image = document.createElement("img");
  image.classList.add("gallery__image");
  image.setAttribute("src", item.preview);
  image.setAttribute("data-source", item.original);
  image.setAttribute("alt", item.description);
  a.append(image);
});

ul.addEventListener("click", onPictureClick);
function onPictureClick(event) {
  console.log(event.target);
  event.preventDefault();

  const target = event.target;

  console.log(target.dataset.source);

  function onClickHandler(event) {
    if (event.target.nodeName === "IMG") {
      lightbox.classList.add("is-open");
      lightbox.querySelector(".lightbox__image").src = event.target.src;
      lightbox.querySelector(".lightbox__image").alt = event.target.alt;
    }
  }

  function onCloseHandler(event) {
    if (event.target.nodeName === "IMG" || event.target.nodeName === "BUTTON") {
      lightbox.classList.remove("is-open");
    }
  }

  ul.addEventListener("click", onClickHandler);
  btn.addEventListener("click", onCloseHandler);
}
