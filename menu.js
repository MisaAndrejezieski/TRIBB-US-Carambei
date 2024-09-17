let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

window.addEventListener('load', function() {
    var video = document.getElementById('meuVideo');
    video.play();
});

document.getElementById('closeButton').addEventListener('click', function() {
    var video = document.getElementById('meuVideo');
    video.pause();
    document.getElementById('videoContainer').style.display = 'none';
});