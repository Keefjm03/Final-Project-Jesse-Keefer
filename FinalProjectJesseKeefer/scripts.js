var soundFile = document.createElement("audio");
soundFile.preload = "auto";
var volume;
var src = document.createElement();
src.src= Starboy + ".mp3";
soundFile.appendChild(src);

soundFile.load();
soundFile.volume= 0.75;
soundFile.play();


function play(){
    soundFile.currentTime=0.01;
    soundFile.volume=volume;

    setTimeout(function(){soundFile.play();},1);
}





