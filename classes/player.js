class Player {
    constructor() {
        this.x = 0;
        this.y = canvas.height - 80;
        this.width = 80;
        this.height = 80;
        this.image = new Image();
        this.image.src = "../images/player-curvy.png";
        this.speed = 1;
    }

    drawPlayer = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    playerJump = () => {
        if (this.y > 0) {
        this.y -= 70;
        }
    }

    playerRight = () => {
        if (this.x < canvas.width - this.width) {
        this.x += 30;
        }
    }

    playerLeft = () => {
        if (this.x > 0) {
            this.x -= 30;
        }  
    }
    
    platformCollision = (platform) => {
        return (this.x < platform.x + platform.width - 50  &&
            this.x + this.width > platform.x + 40 &&
            this.y < platform.y + platform.height - 90 &&
            this.y + this.height > platform.y + 25 );
    }
    

    heartCollision = (heart) => {
        return (this.x < heart.x + heart.width - 10  &&
            this.x + this.width > heart.x + 10 &&
            this.y < heart.y + heart.height - 10 &&
            this.y + this.height > heart.y + 10 );
    }

    crownCollision = (crown) => {
        return (this.x < crown.x + crown.width - 10  &&
            this.x + this.width > crown.x + 10 &&
            this.y < crown.y + crown.height - 10 &&
            this.y + this.height > crown.y + 10 );
    }

    baddieCollision = (baddie) => {
        return (this.x < baddie.x + baddie.width - 10  &&
            this.x + this.width > baddie.x + 10 &&
            this.y < baddie.y + baddie.height - 10 &&
            this.y + this.height > baddie.y + 10 );
    }


}