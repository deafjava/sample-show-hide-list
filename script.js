document.addEventListener("DOMContentLoaded", function () {
    const iconArrow = document.getElementById("icon-arrow");
    const videoBlock =  document.getElementById("video-block");

    if (iconArrow) {
        iconArrow.addEventListener("click", function () {
            videoBlock.classList.toggle("hide");
            iconArrow.classList.toggle("twist");
        });
    }
});