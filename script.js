let projectButton = document.getElementById("projectButton");
let projectDiv = document.getElementById("projectDiv");
let overlaytext = document.querySelectorAll("overlay");
let changeBG = document.getElementById("backgroundButton");
let emailText = document.getElementById("emailed");
let resetBG = document.getElementById("resetBG");
// Functions 
function showProjects(){
    if (projectDiv.style.display == "none") {
        projectDiv.style.display = "block";
        projectButton.textContent = "Hide Projects";
    } 
    else {
        projectDiv.style.display = "none";
        projectButton.textContent = "Show Projects";
    }
}
    
// change background and then I save it to a universal color variable
function changeBackground() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}
// reset it
function resetBackground(){
    document.body.style.backgroundColor = "#2c3e50";
}

// save it to localstorage so it can be applied on all pages -0
function applySavedBackgroundColor() {
    let savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}


// events yay
projectButton.addEventListener("click",showProjects);
changeBG.addEventListener("click",changeBackground);
resetBG.addEventListener("click",resetBackground);