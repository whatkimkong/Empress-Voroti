// 7th SEVENTH - create Game class and constructor to create the properties of our game.

class Game {
    constructor () { 
        this.bg = new Image(); // how we implement images
        this.bg.src = "../images/bg.png";
        this.player = new Player();
        // create array when I have collisions with obstacles
        this.confidenceArray = [];
        this.isGameRunning = true;
    }



    gameLoop = () => {
        // i) clearing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // ii) movements of the elements and other actions (at first leave empty)

        // ------ > this.gameOverCheck()

        // iii) drawing the elements (at first leave empty)

        // draw canvas
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
       
        this.player.drawPlayer()
        

        // iv) request animation
        if (this.isGameRunning) {
           requestAnimationFrame(this.gameLoop)
        }
    }

}