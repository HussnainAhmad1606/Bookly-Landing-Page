// App.js
//For responsive navbar
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
}
document.addEventListener("DOMContentLoaded", function() {
    // Create an audio element
    var audio = new Audio("../music/test.mp3");

    // Autoplay the audio when it's loaded
    audio.autoplay = true;

    audio.controls = true;
    
    // Append the audio element to the document body
    document.body.appendChild(audio);

    var test = audio.play();

    
if (test !== undefined) {
    test.then(_ => {
        alert("Started")
        // Autoplay started!
    }).catch(error => {
        alert("Autoplay Disabled")
      // Autoplay was prevented.
      // Show a "Play" button so that user can start playback.
    });
  }


    // Optionally, you can pause the audio after a certain time (e.g., 10 seconds)
    setTimeout(function() {
        audio.pause();
    }, 10000); // Pause after 10 seconds (10000 milliseconds)
});
