// expose.js


window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()
var selectedelement;
var selectedSound;
var selectedimage;

function init() {
    document.querySelector("#horn-select").addEventListener('change',changeImage);
    document.querySelector("button").addEventListener('click',changeAudio);
    document.getElementById("volume-controls").addEventListener('input',changeIcon);
}

function changeIcon(){
    let Volume = document.querySelector("#volume-controls input").value;
    let image = document.querySelector("#volume-controls img");
    
    if(Volume == 0 ){
       image.src = "./assets/icons/volume-level-0.svg";
    }
    
    else if(Volume >= 1 && Volume < 33 ){
        image.src = "./assets/icons/volume-level-1.svg";
    }
    
    else if(Volume >= 33 && Volume < 67 ){
        image.src = "./assets/icons/volume-level-2.svg";
    }

    else{
        image.src = "./assets/icons/volume-level-3.svg";
    }

   
   
}

function changeAudio(){

    selectedSound = document.querySelector("audio");
    
    if( selectedelement.value == "air-horn"){
        selectedSound.src = "./assets/audio/air-horn.mp3"; 
    }

    else if( selectedelement.value ==  "car-horn"){
        selectedSound.src = "./assets/audio/car-horn.mp3"; 
    }
   
    else if( selectedelement.value ==  "party-horn"){
        selectedSound.src = "./assets/audio/party-horn.mp3"; 
        jsConfetti.addConfetti();
    }
   
    else{
        selectedSound.src = ""; 
    }
    
    selectedSound.play();
}



function changeImage(){

    selectedelement  = document.querySelector("#horn-select");
    selectedimage = document.querySelector("#expose img");

    if( selectedelement.value ==  "air-horn"){
        selectedimage.src = "./assets/images/air-horn.svg"; 
    }

    else if( selectedelement.value ==  "car-horn"){
        selectedimage.src = "./assets/images/car-horn.svg"; 
    }
   
    else if( selectedelement.value ==  "party-horn"){
        selectedimage.src = "./assets/images/party-horn.svg"; 
    }
   
    else{
        selectedimage.src = "./assets/images/no-image.png"; 
    }
 
}