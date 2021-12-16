import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");

const fullGallery = galleryItems
    .map(
        item =>
      `<a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}"
             alt="${item.description}"/>
       </a>`
  )
    .join("");

galleryRefs.insertAdjacentHTML("beforeend", fullGallery);

let image = '';
let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
