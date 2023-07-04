const loadingScreen = document.getElementById('loading-screen');
loadingScreen.style.display = 'flex';
const audioContainer = document.querySelector(".audio-container");

let audioFiles = {};

function loadAudioFiles() {
  fetch("./audio_files.json")
    .then(response => response.json())
    .then(data => {
      audioFiles = data;

      // Hide loading screen
      loadingScreen.style.display = "none";

      // Generate buttons for each audio file
      Object.keys(audioFiles).forEach(key => {
        const audioButton = document.createElement("button");
        audioButton.classList.add("audio-button");
        audioButton.innerText = key;

        // Set button click handler to play audio file
        audioButton.addEventListener("click", () => {
          playAudio(key);
        });

        // Add button to audio container
        audioContainer.appendChild(audioButton);
      });
    });
}

function playAudio(audioName) {
  const audio = new Audio(audioFiles[audioName]);
  audio.play();
}

loadAudioFiles();
