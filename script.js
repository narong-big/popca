var img = document.getElementById("popca1");
var count = document.getElementById("score");
var score = 0;
var audio = new Audio('pop.mp3');

// mouseclick event
img.addEventListener("mousedown", function(){
    // console.log(1, 'mousedown');
    increaseScore();
    img.src = 'popca2.png';
    audio.play();
});
    
img.addEventListener("mouseup", function(){
    // console.log(2, 'mouseup');
    img.src = 'popca1.png';
    audio.play();
});

// touch event
img.addEventListener("touchstart", function(){
    // console.log(3, 'touchstart');
    increaseScore();
    img.src = 'popca1.png';
    audio.play();
});

img.addEventListener("touchmove", function(){
    // console.log(4, 'touchmove');
    img.src = 'popca1.png';
     audio.play();
});

function increaseScore(){
    score++;
    count.innerHTML = score;
}
