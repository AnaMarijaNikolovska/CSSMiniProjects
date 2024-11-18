const numberOfRaindrops = 13;

const rainContainer = document.querySelector('.rain-container');

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');

    const startLeft = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;

    raindrop.style.left = `${startLeft}px`;
    raindrop.style.animationDuration = `${animationDuration}s`;
    raindrop.style.animationDelay = `${delay}s`;

    rainContainer.appendChild(raindrop);

    raindrop.addEventListener('animationend', () => {
        rainContainer.removeChild(raindrop);
    });
}

function generateRain() {
    for (let i = 0; i < numberOfRaindrops; i++) {
        createRaindrop();
    }
}

generateRain();

setInterval(generateRain, 3000);
