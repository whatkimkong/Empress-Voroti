class Baddie {
    constructor(xPos, yPos) { // because this will change therefore is used as an argument 
        this.x = xPos;
        this.y = yPos; 
        this.width = 40;
        this.height = 40;
        this.speed = 1;
        this.image = new Image()
        this.image.src = "../images/baddie.png";
    }

    // a) create a method to draw the pipe
    drawBaddie = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    // b) create a method to move the pipe
    baddieMove = () => { // x starts at canvas.width
        let direction;
        if (this.x > 0) { // || this.x === 300 || this.x === 550) {
            direction = 1;
        } else if (this.x === 199 || this.x === 489 || this.x === 749) {
            direction = -1;
        } else if (this.x > 0 && this.x < 200 || this.x > 250 && this.x < 490 || this.x > 490 && this.x < 750 ) {
            this.x += this.speed * direction;
        } // is at the LEFT hand limit of any platform //  RIGHT hand limit of any platform
    } // only 3 baddies at first - how to add more ?
}

// direction a property 
//  this.x += this.speed * direction; method
// -1 or 1 is it right or is it left

// if (this.x === 50 || this.x === 500 || this.x === 300 || this.x === 550 || this.x === 10 || this.x === canvas.width - 200 // floor )
// if (this.y === canvas.height - canvas.height / 3 || this.y === 350 || this.y === 230 || this.y === 120 || this.y === 60 || this.y === canvas.height - 80 )
// platforms level

// else if (this.x ===  || this.x === 350 || this.x === 600) {  this.x -= this.speed;} 
