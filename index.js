const menu = document.getElementById('hamburger');
const closeBtn = document.getElementById('close-btn');
const container = document.getElementById('main');

function navbar(e) {
    e.preventDefault();

    container.className = 'main-container change'
}

function closeNavbar(e) {
    e.preventDefault();

    container.classList.remove('change')
}

menu.addEventListener('click', navbar)
closeBtn.addEventListener('click', closeNavbar)
