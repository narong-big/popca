var img = document.getElementById("popca1");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio('pop.mp3');

// Preload audio to ensure it is ready to play
audio.preload = 'auto';

// mouseclick event
img.addEventListener("mousedown", function(){
    increaseScore();
    img.src = 'popca2.png';
    playAudio();
});

img.addEventListener("mouseup", function(){
    img.src = 'popca1.png';
    playAudio();
});

// touch event for mobile
img.addEventListener("touchstart", function(){
    increaseScore();
    img.src = 'popca2.png'; // make sure this changes the image
    playAudio();
});

img.addEventListener("touchend", function(){
    img.src = 'popca1.png'; // change back to original image
    playAudio();
});

// Add a fallback for touchcancel (in case the touch is interrupted)
img.addEventListener("touchcancel", function(){
    img.src = 'popca1.png'; // reset the image in case of touch cancel
});

// Function to increase score
function increaseScore(){
    score++;
    count.innerHTML = score;
}

// Function to play audio with error handling
function playAudio() {
    audio.play().catch(function(error) {
        console.warn("Audio playback failed:", error);
    });
}
