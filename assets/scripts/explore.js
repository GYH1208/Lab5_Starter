// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const inputTxt = document.querySelector("#text-to-speak");
const voiceSelect = document.querySelector('select');
const pitch = document.querySelector('#pitch');
const rate = document.querySelector('#rate');
var voices = [];

function populateVoiceList(){
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function readout(){ 
  
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  
  //utterThis.pitch = pitch.value;
  //utterThis.rate = rate.value;
  //synth.speak(utterThis);

  synth.speak(utterThis);


  let image = document.querySelector('img');
 
  if( synth.speaking ){
    image.src = "./assets/images/smiling-open.png";
  }
 
  utterThis.addEventListener('end',(event)=>{
    image.src = "./assets/images/smiling.png";
  })

  
  





}


function init() {
  // TODO
  document.querySelector('button').addEventListener('click', readout);



inputForm.onsubmit = (event) => {
  event.preventDefault();

  
}





}//end of init()

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}