// main.js => Managing DOM elements & event listeners

//////////// GLOBAL VARIABLES //////////

// 1st FIRST - target the DOM elements
let splashScreen = document.querySelector("#splash-screen")
let gameScreen = document.querySelector("#my-game-screen")
let gameoverScreen = document.querySelector("#gameover-screen")
let wonScreen = document.querySelector("#won-screen")
let confidenceScreen = document.querySelector("#c-score")


// 2nd SECOND canvas setup
let canvas = document.querySelector("#my-canvas")
let ctx = canvas.getContext("2d") // -> create tool that allows us to draw - like our paintbrush

// 3rd THIRD add main game global variable
let gameObject;

// 4th FOURTH - target next DOM elements
let startButton = document.querySelector("#start-btn")
let restartButton = document.querySelector("#restart-btn")

gameScreen.style.display = "none";

// ADD EVENT LISTENERS

// 5th FIFTH when we clock the start button - show canvas and hide the title splash screen
startButton.addEventListener("click", () => {
    // show the canvas DOM element
    canvas.style.display = "block";
    gameScreen.style.display = "flex";
    // hide the splash screen DOM element
    splashScreen.style.display = "none";

    // 9th NINTH - 
    // a) come here from the game file to create the game 
    gameObject = new Game();

    window.addEventListener("keydown", (event) => {
        if (event.code === "ArrowUp") {
            gameObject.player.playerJump();
        } else if (event.code === "ArrowLeft") {
            gameObject.player.playerLeft();
        } else if (event.code === "ArrowRight") {
            gameObject.player.playerRight();
        }
    })

    // b) here we invoke the method of gameLoop so as to start the game
    gameObject.gameLoop()

    restartButton.addEventListener("click", () => {
        // show the canvas DOM element
        canvas.style.display = "none";
        gameScreen.style.display = "none";
        gameoverScreen.style.display = "none";
        // hide the splash screen DOM element
        splashScreen.style.display = "flex";
        gameObject.lostAudio.muted = true;
        gameObject.wonAudio.muted = true;
    })
}) 




