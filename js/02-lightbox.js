// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, 
// яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, 
// а також гортання зображень за допомогою клавіатури.


// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього
//  ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута 
// alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallaryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItems(galleryItems);

gallaryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

gallaryContainer.addEventListener('click', onGallaryContainerClick);

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery__item', { 
    captionDelay: 250,
    captionsData: 'alt',
});


function onGallaryContainerClick(e){
    e.preventDefault();

   const isGallaryEl = e.target.classList.contains('gallery__image');
    if (!isGallaryEl){
        return;
    }

}



