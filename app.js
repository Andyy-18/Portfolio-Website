const vid1=document.getElementById('project-video-1');
const vid2=document.getElementById('project-video-2');
const vid3=document.getElementById('project-video-3');

const hoversign=document.querySelector(".hover-sign");

//sidebar elements
const sideBar=document.querySelector('.sidebar');
const menu=document.querySelector('.menu-icon');
const close=document.querySelector('.close-icon');


const vidlist=[vid1,vid2,vid3];

vidlist.forEach(function(video){
    video.addEventListener('mouseover',function(){
        video.play();
        hoversign.classList.add("active")
    })
    video.addEventListener('mouseout',function(){
        video.pause();
        hoversign.classList.remove("active")
    })
})


// sidebar elements
menu.addEventListener("click",function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})
close.addEventListener("click",function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})


