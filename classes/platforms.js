class Platforms {
    constructor() {
        this.x = 50;
        this.y = canvas.height - canvas.height / 3;
        this.width = 250;
        this.height = 50;
        this.image = new Image();
        this.image.src = "../images/platform1.png";
        this.image2 = new Image();
        this.image2.src = "../images/platform2.png"
    } 

    // this.image = new Image();
    // this.image.src = srcURL;


    drawPlatform = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)// bottom left
        ctx.drawImage(this.image, 500, 350, this.width, this.height) // bottom right
        ctx.drawImage(this.image2, 300, 230, this.width, this.height) // middle
        ctx.drawImage(this.image2, 550, 120, this.width, this.height) // top right
        ctx.drawImage(this.image, 10, 60, this.width, this.height) // for crown
    } 
   
}