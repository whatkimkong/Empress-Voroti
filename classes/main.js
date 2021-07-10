// main.js => Managing DOM elements & event listeners

//////////// GLOBAL VARIABLES //////////

// 1st FIRST - target the DOM elements
let splashScreen = document.querySelector("#splash-screen")
let gameoverScreen = document.querySelector("#gameover-screen")

// 2nd SECOND canvas setup
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d") // -> create tool that allows us to draw - like our paintbrush

// 3rd THIRD add main game global variable
let gameObject;

// 4th FOURTH - target next DOM elements
let startButton = document.querySelector("#start-btn")
// let gameoverScreen = document.querySelector("#gameover-screen")



// ADD EVENT LISTENERS

// 5th FIFTH when we clock the start button - show canvas and hide the title splash screen
startButton.addEventListener("click", () => {
    // show the canvas DOM element
    canvas.style.display = "block";
    // hide the splash screen DOM element
    splashScreen.style.display = "none";

    // 9th NINTH - 
    // a) come here from the game file to create the game 
    gameObject = new Game()
    
    // b) here we invoke the method of gameLoop so as to start the game
    gameObject.gameLoop()


    // 13(b) step and then 14 > new file pipe.js
    window.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp") {
            gameObject.player.playerJump();
        } else if (event.code === "ArrowLeft") {
            gameObject.player.playerLeft();
        } else if (event.code === "ArrowRight") {
            gameObject.player.playerRight();
        }
    })
}) 


