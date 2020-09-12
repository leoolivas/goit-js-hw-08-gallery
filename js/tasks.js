import gallery from "./gallery-items.js";

const ul = document.querySelector("ul.js-gallery");
const lightbox = document.querySelector(".lightbox");
const btn = document.querySelector('[data-action="close-lightbox"]');

gallery.forEach((item) => {
  let image = document.createElement("img");
  image.classList.add("gallery__image");
  image.setAttribute("src", item.preview);
  image.setAttribute("data-source", item.original);
  image.setAttribute("alt", item.description);

  let a = document.createElement("a");
  a.classList.add("gallery__link");
  a.setAttribute("href", item.original);

  a.append(image);

  let li = document.createElement("li");
  li.classList.add("gallery__item");

  li.append(a);

  ul.append(li);
});

ul.addEventListener("click", onPictureClick);
function onPictureClick(event) {
  console.log(event.target);
  event.preventDefault();

  const target = event.target;

  console.log(target.dataset.source);

  const lightboxImage = document.querySelector(".lightbox__image");

  function onClickHandler(event) {
    if (event.target.nodeName === "IMG") {
      lightbox.classList.add("is-open");
      lightboxImage.src = event.target.src;
      lightboxImage.alt = event.target.alt;
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
