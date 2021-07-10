// 7th SEVENTH - create Game class and constructor to create the properties of our game.

class Game {
    constructor () { 
        this.bg = new Image(); // how we implement images
        this.bg.src = "../images/bg.png";
        this.player = new Player();
        this.crown = new Crown();
        this.confidence = new Confidence();
        this.platform = new Platforms();
        this.platformArray = [];
        // create array when I have collisions with obstacles
        this.confidenceArray = [];
        this.isGameRunning = true;
    }


    platformCollisionCheck = () => {
        // this.platformArray.forEach(eachPlatform => { 
             if (this.player.platformCollision(this.platform) === false) {
            this.player.playerGravity();
             }   
    }
    

    gameLoop = () => {
        // i) clearing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // ii) movements of the elements and other actions (at first leave empty)

        this.platformCollisionCheck()

        // ------ > this.gameOverCheck()

        // iii) drawing the elements (at first leave empty)

        // draw canvas
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)

        this.player.drawPlayer()
        this.crown.drawCrown()
        this.confidence.drawConfidence()


        this.platform.drawPlatform()
        

        // iv) request animation
        if (this.isGameRunning) {
           requestAnimationFrame(this.gameLoop)
        }
    }

}