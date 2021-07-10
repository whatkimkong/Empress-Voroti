class Crown {
    constructor() {
        this.x = 15;
        this.y = 15;
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.image.src = "../images/crown.png";
    }

    drawCrown = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

}