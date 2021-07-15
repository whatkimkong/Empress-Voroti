class Platforms {
    constructor(xPos, yPos, URL) {
        this.x = xPos;
        this.y = yPos;
        this.width = 250;
        this.height = 50;
        this.image = new Image();
        this.image.src = URL;
    } 
    
    drawPlatform = () => {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } 

    // create variable like this.image.src = srcURL; ?? NOOOO its not a variable its a PARAMETER
    // where does the src go? -> is in the property parameters in the constructor
}