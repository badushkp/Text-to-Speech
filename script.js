let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    // Drop down for speech
    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
}

// function for converting to speech
document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})

// for changing the voice selection
voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
})