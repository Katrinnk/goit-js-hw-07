import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryList = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item" >
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}}"/>
</a>
</li>`).join('');

gallery.insertAdjacentHTML('afterbegin', galleryList);
gallery.addEventListener('click', showModalImage);

function showModalImage(event) {
    if (event.target.tagName !== 'IMG'){
        return;
    }
    event.preventDefault();
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" >
        `,{
            onShow: () => {
                document.addEventListener('keydown', closeModal);
            },
            onClose: () => {
                document.removeEventListener('keydown', closeModal);
            },
        });

        instance.show();

        function closeModal(event) {
            if (event.code === 'Escape') {
                instance.close();
            } else return;
         }

    } 


