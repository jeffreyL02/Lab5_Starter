// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;



function init() {
  let voices;
  synth.onvoiceschanged = function() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById('voice-select').appendChild(option);
    }
  };
  
  const textbox = document.getElementById('text-to-speak');
  
  let submitbtn = document.getElementsByTagName('button')[0];
  submitbtn.addEventListener('click', () => {
    let utterThis = new SpeechSynthesisUtterance(textbox.value);
    utterThis.addEventListener('end', () => {    
      document.getElementsByTagName('img')[0].src = '../assets/images/smiling.png';
    });
    let selectedOption = document.getElementById('voice-select').selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    document.getElementsByTagName('img')[0].src = '../assets/images/smiling-open.png'; 
  });


}

