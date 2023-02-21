let Button1 = document.querySelector(".option-one");
let Button2 = document.querySelector(".option-two");
let Screen1 = document.querySelector(".option-one-screen");
let Screen2 = document.querySelector(".option-two-screen");
let StoryOP = document.querySelector(".story-opening");
let OP1Button = document.querySelector(".option-one-one");
let OP2Button = document.querySelector(".option-one-two");
let OP1ScreenEnd = document.querySelector(".option-one-one-end");
let OP2ScreenEnd = document.querySelector(".option-one-two-end");
let NameInput = document.querySelector(".name-input");
let NameButton = document.querySelector(".name-button");
let opText = document.querySelector(".opening-text");
let ReButton = document.querySelector(".restart-button");

NameButton.onclick = function() {
    opText.innerHTML = `${NameInput.value} are you afraid to answer?`; 
};


Button1.onclick = function() {
    StoryOP.style.display = "none";
    Screen1.style.display = "block";
};

Button2.onclick = function() {
    StoryOP.style.display = "none";
    Screen2.style.display = "block";
};

OP1Button.onclick = function() {
    Screen1.style.display = "none";
    OP1ScreenEnd.style.display = "block";
};
OP2Button.onclick = function() {
    Screen1.style.display = "none";
    OP2ScreenEnd.style.display = "block";
};

ReButton.onclick = function() {
    StoryOP.style.display = "block";
    Screen1.style.display = "none";
    Screen2.style.display = "none";
    OP1ScreenEnd.style.display = "none";
    OP2ScreenEnd.style.display = "none";
};





