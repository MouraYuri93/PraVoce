const images = [
    'src/img/00.jpg',
    'src/img/01.jpg',
    'src/img/02.jpg',
    'src/img/03.jpg',
    'src/img/04.jpg',
    'src/img/05.jpg',
    'src/img/06.jpg',
    'src/img/07.jpg',
    'src/img/08.jpg',
    'src/img/09.jpg',
    'src/img/10.jpg',
    'src/img/11.jpg',
    'src/img/12.jpg',
    'src/img/13.mp4'
];

let currentIndex = 0;
const imageElement = document.getElementById('currentImage');
const videoElement = document.getElementById('currentVideo');
const slideshowContainer = document.getElementById('slideshowContainer');
const startSlideshowButton = document.getElementById('startSlideshow');
const backToStartButton = document.getElementById('backToStart');
const intervalTime = 6000;
let slideshowInterval;

function showMedia(index) {
    const currentFile = images[index];
    const isVideo = currentFile.endsWith('.mp4');

    if (isVideo) {
        imageElement.style.display = 'none';
        videoElement.style.display = 'block';
        videoElement.src = currentFile;
        videoElement.load();
        videoElement.play();
    } else {
        videoElement.pause();
        videoElement.style.display = 'none';
        imageElement.style.display = 'block';
        imageElement.src = currentFile;
    }
}

function nextMedia() {
    currentIndex = (currentIndex + 1) % images.length;
    showMedia(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    startSlideshowButton.addEventListener('click', () => {
        document.getElementById('initialText').style.display = 'none';
        slideshowContainer.style.display = 'flex';
        backToStartButton.style.display = 'inline-block';
        showMedia(currentIndex);
        slideshowInterval = setInterval(nextMedia, intervalTime);
    });

    imageElement.addEventListener('click', nextMedia);
    videoElement.addEventListener('click', nextMedia);

    backToStartButton.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        slideshowContainer.style.display = 'none';
        document.getElementById('initialText').style.display = 'block';
        backToStartButton.style.display = 'none';
        currentIndex = 0;
        videoElement.pause();
    });
});