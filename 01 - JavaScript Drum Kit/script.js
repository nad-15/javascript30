window.addEventListener('keydown', function(e) {
    const keyElements = document.querySelectorAll(`[data-key="${e.keyCode}"]`);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return; // Stop if no matching audio element

    audio.currentTime = 0; // Rewind to start
    audio.play(); // Play the sound

    keyElements.forEach((keyElement) => {
        console.log(`${e.key} is pressed`);
        keyElement.classList.add('playing');

        setTimeout(() => {
            keyElement.classList.remove('playing');
        }, 200);
    });

});
