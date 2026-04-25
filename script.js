// Make Change Background Color Project.
const body = document.querySelector("body");
const colorInput = document.querySelector("#color-input");
const applyDisplay = document.querySelector("#apply-color");


// Function of Change Background Color
function changeBackground() {
    const colorDisplay = colorInput.value;
    
    // Error Handling
    if(!colorDisplay){
        alert("Please Enter Color");
        return;
    }

    body.style.backgroundColor = colorDisplay;

    // Clear Input
    colorInput.value = "";
}

// Click Event
applyDisplay.addEventListener("click",changeBackground);

// Enter Key Support
colorInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
        changeBackground();
    }
})


























































































































