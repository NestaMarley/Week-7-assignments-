// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function demonstrating scope
let globalVar = "I am global!";

function scopeExample() {
    let localVar = "I am local!";
    console.log(globalVar); // Accessible
    console.log(localVar);   // Accessible
}

scopeExample();
// console.log(localVar); // Uncommenting this will cause an error

// Function to toggle animation
function toggleAnimation() {
    const box = document.getElementById("animatedBox");
    box.classList.toggle("animated");
}

// Event listeners
document.getElementById("colorButton").addEventListener("click", () => {
    const box = document.getElementById("animatedBox");
    box.style.width = box.style.width === "200px" ? "100px" : "200px";
    box.style.height = box.style.height === "200px" ? "100px" : "200px";
});

document.getElementById("toggleAnimationButton").addEventListener("click", toggleAnimation);
