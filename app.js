// ✅ Smart preload control for videos
document.querySelectorAll("video").forEach(video => {
  const isMobile = window.innerWidth <= 768;
  video.setAttribute("preload", isMobile ? "none" : "auto");
});

// ✅ Hover-to-play on project videos
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

// ✅ Sidebar open/close logic
const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

menuIcon?.addEventListener("click", () => {
  sidebar.classList.remove("close-sidebar");
  sidebar.classList.add("open-sidebar");
});

closeIcon?.addEventListener("click", () => {
  sidebar.classList.remove("open-sidebar");
  sidebar.classList.add("close-sidebar");
});

// ✅ Page Loader Fade Out
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = 0;
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.style.display = "none", 500);
  }
});
