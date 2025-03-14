window.addEventListener('keydown', playSound );

function playSound(e) {
    const keyElement = document.querySelector(`div[data-key="${e.keyCode}"]`); // Select the key div
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Select the corresponding audio

    if (!audio) return; // Stop if no matching audio

    audio.currentTime = 0; // Reset playback
    audio.play(); // Play the sound

    keyElement?.classList.add('playing'); // Add class if keyElement exists
    // setTimeout(() => {
    //     keyElement?.classList.remove('playing'); // Remove class after animation
    // }, 200);
}

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== `transform`) return;
    this.classList.remove(`playing`);
}

