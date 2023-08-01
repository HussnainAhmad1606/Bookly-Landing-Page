// App.js
const toggleBtn = document.querySelector('.toggle-btn');
        const toggleBtnIcon = document.querySelector('.toggle-btn i');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        toggleBtn.onclick = function () {
            dropdownMenu.classList.toggle('open')
        }