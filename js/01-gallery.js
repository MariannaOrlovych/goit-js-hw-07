
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

gallaryContainer.addEventListener('click', onGallaryContainerClick);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
        </a>
        </div> `;
    })
    .join('');
}

function onGallaryContainerClick(e){
    e.preventDefault();

   const isGallaryEl = e.target.classList.contains('gallery__image');
    if (!isGallaryEl){
        return;
    }


    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="1280" height="860">`,
    {
        onShow: (instance) => {
            gallaryContainer.addEventListener("keydown", onEscapeButton);
        },
        onClose: (instance) => {
            gallaryContainer.removeEventListener("keydown", onEscapeButton);
        },
      }
    );
    instance.show();
    function onEscapeButton(evt) {
      if (evt.key === "Escape") {
        instance.close();
      }
    }

}


