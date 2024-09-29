const button = document.querySelector('.btn');
const closeIcon = document.querySelector('.close-icon');
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");


button.addEventListener('click', ()=>{
    trailerContainerEl.classList.remove('active');
});
closeIcon.addEventListener('click', ()=>{
    trailerContainerEl.classList.add('active');
    videoEl.pause();
    videoEl.currentTime = 0;
});