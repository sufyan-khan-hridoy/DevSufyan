let bar = document.querySelector('#nav-bar');
let times = document.querySelector('#nav-times');
let layout = document.querySelector('.wide-layout');
let menu = document.querySelector('.nav-menu');
let title = document.querySelector('.title');

bar.addEventListener('click',function(){
    times.classList.add('nav-times-active');
    this.classList.add('nav-bar-active');
    layout.classList.add('wide-active');
    menu.classList.add('nav-active');
    title.style.display = "none";
    

});

times.addEventListener('click', function () {
    bar.classList.remove('nav-bar-active');
    this.classList.remove('nav-times-active');
    layout.classList.remove('wide-active');
    menu.classList.remove('nav-active');
    title.style.display = "block";
});



