// App.js
//For responsive navbar
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
}


var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "../music/test.mp3"

document.body.addEventListener("mousemove", function () {
    console.log("Playing")
    audio.play()
})