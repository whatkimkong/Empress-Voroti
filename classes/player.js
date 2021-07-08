class Player {
    constructor() {
        this.x = 50;
        this.y = canvas.height / 2;
        this.width = 80;
        this.height = 80;
        this.image = new Image();
        this.image.src = "../images/player-curvy.png";
        this.speed = 1;
    }


    drawPlayer = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

}