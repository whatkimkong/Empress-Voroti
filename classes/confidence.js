class Confidence {
    constructor() {
        this.x = 80;
        this.y = 300;
        this.width = 20;
        this.height = 20;
        this.image = new Image();
        this.image.src = "../images/heart.png";
    }

    drawConfidence = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height) // bottom left
        ctx.drawImage(this.image, this.x + 40, this.y + 5, this.width, this.height)
        ctx.drawImage(this.image, this.x + 80, this.y , this.width, this.height)
        ctx.drawImage(this.image, this.x + 120, this.y - 5, this.width, this.height)
        ctx.drawImage(this.image, this.x + 160, this.y + 5, this.width, this.height)

        ctx.drawImage(this.image, this.x + 460, this.y + 20, this.width, this.height) // bottom right
        ctx.drawImage(this.image, this.x + 500, this.y + 30, this.width, this.height)
        ctx.drawImage(this.image, this.x + 540, this.y + 25, this.width, this.height)
        ctx.drawImage(this.image, this.x + 580, this.y + 30, this.width, this.height)
        ctx.drawImage(this.image, this.x + 620, this.y + 15, this.width, this.height)

        ctx.drawImage(this.image, canvas.width - 50, canvas.height - 40, this.width, this.height) // floor right
        ctx.drawImage(this.image, canvas.width - 90, canvas.height - 50, this.width, this.height)
        ctx.drawImage(this.image, canvas.width - 130, canvas.height - 45, this.width, this.height)

        ctx.drawImage(this.image, this.x + 280, this.y - 95, this.width, this.height) // middle 300, 230
        ctx.drawImage(this.image, this.x + 320, this.y - 110, this.width, this.height)
        ctx.drawImage(this.image, this.x + 360, this.y - 105, this.width, this.height)
        ctx.drawImage(this.image, this.x + 400, this.y - 115, this.width, this.height)


        ctx.drawImage(this.image, this.x + 500, this.y - 210, this.width, this.height) // top right  550, 120
        ctx.drawImage(this.image, this.x + 540, this.y - 205, this.width, this.height)
        ctx.drawImage(this.image, this.x + 680, this.y - 210, this.width, this.height)
        ctx.drawImage(this.image, this.x + 685, this.y - 240, this.width, this.height)
        ctx.drawImage(this.image, this.x + 675, this.y - 270, this.width, this.height)
        ctx.drawImage(this.image, this.x + 680, this.y - 300, this.width, this.height)
        

        ctx.drawImage(this.image, 70, 20, this.width, this.height) // top left with crown!!
        ctx.drawImage(this.image, 95, 30, this.width, this.height) 

    }

    // yPos to be above the platforms --?

}

