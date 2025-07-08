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


// ✅ Smart Preload for Videos (mobile vs desktop)
document.querySelectorAll("video").forEach(video => {
    const isMobile = window.innerWidth <= 768;
    video.setAttribute("preload", isMobile ? "none" : "auto");
});

// ✅ Hover-to-Play for Project Videos
const hoverSign = document.querySelector(".hover-sign");
document.querySelectorAll(".project-vidbox video").forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play();
        hoverSign?.classList.add("active");
    });
    video.addEventListener("mouseleave", () => {
        video.pause();
        hoverSign?.classList.remove("active");
    });
});

// ✅ Sidebar Toggle Functionality
const sidebar = document.querySelector(".sidebar");
document.querySelector(".menu-icon")?.addEventListener("click", () => {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
});

document.querySelector(".close-icon")?.addEventListener("click", () => {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
});
