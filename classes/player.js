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
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

// wall collisions are within each movement of the player

    playerGravity = () => {
        if (this.y + this.height < canvas.height) {
            this.y++;
        }
    }

    playerJump = () => {
        if (this.y > 0) {
        this.y -= 40;
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

}