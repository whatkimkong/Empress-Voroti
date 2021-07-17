class Confidence {
    constructor(xPos, yPos) {
        this.x = xPos;
        this.y = yPos;
        this.width = 20;
        this.height = 20;
        this.image = new Image();
        this.image.src = "./images/heart.png";
    }

    drawConfidence = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    
    // isPlayerConfidentCheck = () => {
    //     let isPlayerConfident = false;

    //     if (this.player.x === this.confidence.x && this.player.y === this.confidence.y ||
    //         this.player.x === this.confidence.x + 40 && this.player.y === this.confidence.y + 5 ||
    //         this.player.x === this.confidence.x + 80 && this.player.y === this.confidence.y ||
    //         this.player.x === this.confidence.x + 120 && this.player.y === this.confidence.y - 5 ||
    //         this.player.x === this.confidence.x + 160 && this.player.y === this.confidence.y + 5 ||

    //         this.player.x === this.confidence.x + 460 && this.player.y === this.confidence.y + 20 ||
    //         this.player.x === this.confidence.x + 500 && this.player.y === this.confidence.y + 30 ||
    //         this.player.x === this.confidence.x + 540 && this.player.y === this.confidence.y + 25 ||
    //         this.player.x === this.confidence.x + 580 && this.player.y === this.confidence.y + 30 ||
    //         this.player.x === this.confidence.x + 620 && this.player.y === this.confidence.y + 15 ||

    //         this.player.x === canvas.width - 50 && this.player.y === canvas.height - 40 ||
    //         this.player.x === canvas.width - 90 && this.player.y === canvas.height - 50 ||
    //         this.player.x === canvas.width - 130 && this.player.y === canvas.height - 45 ||

    //         this.player.x === this.confidence.x + 280 && this.player.y === this.confidence.y - 95 ||
    //         this.player.x === this.confidence.x + 320 && this.player.y === this.confidence.y - 110 ||
    //         this.player.x === this.confidence.x + 360 && this.player.y === this.confidence.y - 105 ||
    //         this.player.x === this.confidence.x + 400 && this.player.y === this.confidence.y - 115 ||

    //         this.player.x === this.confidence.x + 500 && this.player.y === this.confidence.y - 210 ||
    //         this.player.x === this.confidence.x + 540 && this.player.y === this.confidence.y - 205 ||
    //         this.player.x === this.confidence.x + 680 && this.player.y === this.confidence.y - 210 ||
    //         this.player.x === this.confidence.x + 685 && this.player.y === this.confidence.y - 240 ||
    //         this.player.x === this.confidence.x + 675 && this.player.y === this.confidence.y - 270 ||
    //         this.player.x === this.confidence.x + 680 && this.player.y === this.confidence.y - 300 ||

    //         this.player.x === 70 && this.player.y === 20 ||
    //         this.player.x === 95 && this.player.y === 30) {
    //             return this.isPlayerConfident = true;
    //         }
    //         // bottom left x + 40 // bottom right x + 460 // floor right canvas.width - 50 
    //         // middle x + 280 // top right x + 500 // top left 70
    //             else if (isPlayerConfident === false) {
    //                 this.confidence.drawConfidence() // hearts
    //         }
}

