const images = [
    'placeholder.png',
    'placeholder.png',
    'placeholder.png'
];

let current = 0;
const slide = document.getElementById('slide');

function showNext() {
    current = (current + 1) % images.length;
    slide.src = images[current];
}

setInterval(showNext, 3000); // Change image every 3 seconds
