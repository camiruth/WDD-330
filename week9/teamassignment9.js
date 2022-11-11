
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function moveIt(pixels) {
    if (pixels === '') return '10px';
    if (pixels === '10px') return '20px';
    if (pixels === '20px') return '30px';
    if (pixels === '30px') return '40px';
    if (pixels === '40px') return '50px';
    if (pixels === '50px') return '60px';
    if (pixels === '60px') return '70px';
    if (pixels === '70px') return '80px';
    if (pixels === '80px') return '90px';
    if (pixels === '90px') return '';
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    const newPosition = moveIt(key.style.top);
    key.style.top = newPosition;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


