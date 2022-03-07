var audio = document.getElementById('audio');
var btnPlay = document.getElementById('btnPlay');
var btnPause = document.getElementById('btnPause');
var btnStop = document.getElementById('btnStop');

if(audio && btnPlay && btnPause && btnStop){
    btnPlay.addEventListener('click', function(event){
        audio.play();
    });
    btnPause.addEventListener('click', function(event){
        audio.pause();
    });
    btnStop.addEventListener('click', function(event){
        audio.pause();
        audio.currentTime = 0;
    });
}
function changeText(id) {
    id.innerHTML = "Ooops!";
}
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
}
