import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRefs = document.querySelector(".gallery");


// const modal = document.querySelector(".js-lightbox");
// const modalImg = document.querySelector(".lightbox__image");

const fullGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
      </div>`
  )
    .join("");
  
galleryRefs.insertAdjacentHTML("beforeend", fullGallery);
// galleryRefs.addEventListener("click");

function createModal(evt) {
    evt.preventDefault();

    const selectedImg = evt.target.dataset.source;
    console.log(selectedImg);

    const modal = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`)

    modal.show();
    
    document.addEventListener('keydown', closeModal);
    function closeModal(evt) { 
        if (evt.code === "Escape") {
            document.querySelector('.gallery__image').style.display = 'none';
        }
        modal.close();
    }
    
}



