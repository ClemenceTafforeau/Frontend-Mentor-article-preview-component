const sharePopUp = document.querySelector(".share-pop-up");
const shareText = document.querySelector(".share-text");
const shareToggle = document.querySelector(".share-btn");

shareToggle.addEventListener("click", () => {
    const visibility = sharePopUp.getAttribute("data-visible");
    if (visibility === "false") {
        sharePopUp.setAttribute("data-visible", "true");
        shareText.setAttribute("data-visible", "true");
        shareToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
        sharePopUp.setAttribute("data-visible", "false");
        shareText.setAttribute("data-visible", "false");
        shareToggle.setAttribute("aria-expanded", "false");
    }
});