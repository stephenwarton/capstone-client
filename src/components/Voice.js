var synth = window.speechSynthesis;
var voices = synth.getVoices();

export function speak(inputText){
    var utterThis = new SpeechSynthesisUtterance(inputText);
    utterThis.voice= voices[0];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
  }

export function cancel(){
  synth.cancel();
}
