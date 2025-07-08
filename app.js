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

// ✅ Sidebar Toggle
const sidebar = document.querySelector(".sidebar");
document.querySelector(".menu-icon")?.addEventListener("click", () => {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
});

document.querySelector(".close-icon")?.addEventListener("click", () => {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
});
