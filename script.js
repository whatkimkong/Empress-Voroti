// INITIAL CANVAS STRUCTURE
const canvas = document.querySelector("#my-canvas");
canvas.style.backgroundColor = "lightGray";
canvas.width = 600;
canvas.height = 800;

const ctx = canvas.getContext("2d"); // Enables paintbrush.

// GLOBAL VARIABLES
let ballY = 50
let ballX = 50
let directionX = 1
let directionY = 1 // create new variables for reverse direction
let ballSpeed = 5;
let ballRadius = 10; // add this variable so that the ball bounces off the EDGE of the wall!!
let paddleX = canvas.width / 4;
let paddleY = canvas.height - 40; // create paddle variables
let paddleWidth = 170;
let paddleHeight = 15;
let isGameRunning = true;

// GLOBAL FUNCTIONS
const ballDraw = () => {
    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2) // draws circle x, y, radius, initial angle, end angle.
    ctx.fill()
    ctx.closePath()
}

const ballMovement = () => {
    ballY += ballSpeed * directionY 
    ballX += ballSpeed * directionX //add new direction function
} // add ballSpeed to make it faster <3 !! hehe 

const ballWallCollision = () => {
    if (ballX > canvas.width - ballRadius) {
        directionX = -1;
    } if (ballY > canvas.height - ballRadius) {
        isGameRunning = false; // end of game!!!!!
        canvas.style.display = "none";
        // directionY = -1;
    } if (ballX < 0 + ballRadius) {
        directionX = 1;
    } if (ballY < 0 + ballRadius) {
        directionY = 1;
    }
    // create functions for the collision
} 

const paddleBallCollision = () => {
    if (ballY + ballRadius > paddleY && ballX + ballRadius > paddleX && ballX + ballRadius < paddleX + paddleWidth) {
        directionY = -1;
      }
}

const paddleDraw = () => {
    ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight)
} //draw your paddle!

    // we make a function so that we can have it tidy in the loop so we invoke the function instead

// GAME LOOP FUNCTION
const gameLoop = () => {
    // test our game is running
        // console.log("running")
    // 1. clearing the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 2. running our actions
    ballMovement() // instead of ballY++ etc -> turn into function!!
    ballWallCollision() // invoke the collision!
    paddleBallCollision()

    // 3. drawing our elements
    ballDraw()
    paddleDraw()

    // 4. request animation
    if (isGameRunning) {
        requestAnimationFrame(gameLoop)
    } // IF NOT then NO GAME ---> stopping the loop STOPS THE GAME!!!
}

// EVENT LISTENERS
window.addEventListener("keydown", (event) => {
    // console.log(event.code)
    if (event.code === "ArrowRight" && paddleX + paddleWidth < canvas.width) {
        paddleX += 30;
      } else if (event.code === "ArrowLeft" && paddleX > 0) {
        paddleX -= 30;
      }
} )

// GAME START
gameLoop();
