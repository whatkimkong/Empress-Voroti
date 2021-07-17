class Crown {
    constructor() {
        this.x = 350;
        this.y = 190;
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.image.src = "./Images/crown.png";
    }

    drawCrown = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}