const gridItems = document.querySelectorAll('.photo');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightboxButton = document.querySelector('.close-button');

gridItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

closeLightboxButton.addEventListener('click', closeLightbox);

function openLightbox(index) {
    lightboxImage.src = gridItems[index].querySelector('img').src;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});