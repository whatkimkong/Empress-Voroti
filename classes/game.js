// 7th SEVENTH - create Game class and constructor to create the properties of our game.

class Game {
    constructor () { 
        this.bg = new Image(); // how we implement images
        this.bg.src = "../images/bg.png";
        this.player = new Player();
        this.crown = new Crown();
        this.confidence = new Confidence();
        this.platform = new Platforms();
        this.platformArray = [];
        this.confidenceArray = [];
        this.crownArray = [];
        this.isGameRunning = true;
    }

    spawnPlatforms = () => {
        let platform1 = new Platforms(50, canvas.height - canvas.height / 3, "../images/platform1.png");
        this.platformArray.push(platform1); // bottom left

        let platform2 = new Platforms(500, 350,"../images/platform1.png");
        this.platformArray.push(platform2); // bottom right

        let platform3 = new Platforms(300, 230, "../images/platform2.png");
        this.platformArray.push(platform3); // middle

        let platform4 = new Platforms(550, 120, "../images/platform2.png");
        this.platformArray.push(platform4); // top right

        let platform5 = new Platforms(10, 60, "../images/platform1.png");
        this.platformArray.push(platform5); // for crown
    }

    spawnConfidence = () => {
        let confidenceSymbol = new Confidence(80, 300); // bottom left
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(120, 305);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(160, 300);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(200, 295);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(240, 305);
        this.confidenceArray.push(confidenceSymbol);
        
        confidenceSymbol = new Confidence(540, 320); // bottom right
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(580, 330);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(620, 325);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(660, 330);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(700, 315);
        this.confidenceArray.push(confidenceSymbol);

        confidenceSymbol = new Confidence(canvas.width - 50, canvas.height - 40); // floor right
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(canvas.width - 90, canvas.height - 50);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(canvas.width - 130, canvas.height - 45);
        this.confidenceArray.push(confidenceSymbol);

        confidenceSymbol = new Confidence(360, 205); // middle
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(400, 190);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(440, 195);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(480, 185);
        this.confidenceArray.push(confidenceSymbol);

        confidenceSymbol = new Confidence(580, 90); // top right
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(620, 95);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(760, 90);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(765, 60);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(755, 30);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(760, 0);
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(70, 20); // top left with crown
        this.confidenceArray.push(confidenceSymbol);
        confidenceSymbol = new Confidence(95, 30);
        this.confidenceArray.push(confidenceSymbol);
    }

    platformCollisionCheck = () => {
        let isGrounded = false;

        this.platformArray.forEach(eachPlatform => {
            if (this.player.platformCollision(eachPlatform) || this.player.y === canvas.height - 80 ) {
               isGrounded = true; 
            }
        })
        if (isGrounded === false) {
            this.player.y++;
        }
    } // the problem was with the second part of the or conditional - axis were off... and had to be in line with the player starting point.


    confidenceCollisionCheck = () => {
        this.confidenceArray.forEach((heart, index) => {
            if (this.player.heartCollision(heart) === true) {
                this.confidenceArray.splice(index, 1);
            }
        })
    }

    spawnCrown = () => {
        let crownAppear = new Crown();
        this.crownArray.push(crownAppear);
    }

    crownCollisionCheck = () => {
        this.crownArray.forEach((crown, index)  => {
            if (this.player.crownCollision(crown) === true) {
                this.crownArray.splice(index, 1);
            }
        })
    }

    wonOrLost = () => {
        if (this.confidenceArray.length === 0 && this.crownArray.length === 0) {
            this.isGameRunning === false;
            // put here the dom won screen? 
            wonScreen.style.display = "flex";
        }
    }

    gameLoop = () => {
        // i) clearing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // ii) movements of the elements and other actions (at first leave empty)

        if (this.platformArray.length === 0) {
            this.spawnPlatforms();
        }

        if (this.confidenceArray.length === 0) {
            this.spawnConfidence();
        }

        if (this.crownArray.length === 0) {
            this.spawnCrown();
        }

        this.confidenceCollisionCheck();
        this.platformCollisionCheck();
        this.crownCollisionCheck()
        // thisgameover

        // iii) drawing the elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height) // draw canvas

        this.player.drawPlayer() // player


        this.platformArray.forEach(eachPlatform => {
            eachPlatform.drawPlatform();
          }) //draw Array

        this.confidenceArray.forEach(eachHeart => {
            eachHeart.drawConfidence()
        })  // draw those that are STILL in the Array (after splicing)

        this.wonOrLost()

        // iv) request animation
        if (this.isGameRunning) {
           requestAnimationFrame(this.gameLoop)
        }
    }
}