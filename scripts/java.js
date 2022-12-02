// DEVELOPER: Azka Naser, IS117-101, Fall 2022

/* Checklist Functionality */

/* Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");

fullItemList.addEventListener("click", checkOffItem);

function checkOffItem(clicked) {
    if (clicked.target.tagName == "LI") {
        clicked.target.classList.toggle("all-done");
    }
}