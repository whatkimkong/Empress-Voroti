// 7th SEVENTH - create Game class and constructor to create the properties of our game.

class Game {
    constructor () { 
        this.bg = new Image(); // how we implement images
        this.bg.src = "./Images/bg.png";
        this.player = new Player();
        this.platformArray = [];
        this.confidenceArray = [];
        this.confidenceScore = 0;
        this.crownArray = [];
        this.baddieArray = [];
        this.isGameRunning = true;
        this.gameAudio = new Audio("./music/island-beat.mp3");
        this.gameAudio.volume = 0.1;
        // this.tlcAudio = new Audio("./music");
        // this.crownAudio = new Audio("./music");
        this.wonAudio = new Audio("./music/short1.mp3");
        this.wonAudio.volume = 0.1;
        this.lostAudio = new Audio("./music/aaliyah-short.mp3");
        this.lostAudio.volume = 0.1;
    }

    spawnPlatforms = () => {
        let platform1 = new Platforms(50, canvas.height - canvas.height / 3, "./Images/platform1.png");
        this.platformArray.push(platform1); // bottom left

        let platform2 = new Platforms(500, 350,"./Images/platform1.png");
        this.platformArray.push(platform2); // bottom right

        let platform3 = new Platforms(300, 230, "./Images/platform2.png");
        this.platformArray.push(platform3); // middle

        let platform4 = new Platforms(550, 120, "./Images/platform2.png");
        this.platformArray.push(platform4); // top right

        let platform5 = new Platforms(10, 60, "./Images/platform1.png");
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
            this.player.y+=2;
        }
    } // the problem was with the second part of the or conditional - axis were off... and had to be in line with the player starting point.

    confidenceCollisionCheck = () => {
        this.confidenceArray.forEach((eachHeart, index) => {
            if (this.player.heartCollision(eachHeart) === true) {
                this.confidenceArray.splice(index, 1);
                this.confidenceScore += 1;
                confidenceScreen.innerText = this.confidenceScore;
                if (this.confidenceScore === 25) {
                    this.spawnCrown();
                }
            }
        })
    }

    spawnCrown = () => {
        let crownAppear = new Crown();
        this.crownArray.push(crownAppear);
    }

    wonOrLostCollisionCheck = () => {
        this.crownArray.forEach(crown => {
            if (this.player.crownCollision(crown) === true) {
                this.isGameRunning = false; // thats when the crown is collided with !! GAME WON!!! 
                canvas.style.display = "none";
                gameScreen.style.display = "none";
                wonScreen.style.display = "flex";
                this.gameAudio.pause();
                this.wonAudio.play();
            }
        })
        this.baddieArray.forEach(baddie => {
            if (this.player.baddieCollision(baddie) === true) {
                this.isGameRunning = false;
                canvas.style.display = "none";
                gameScreen.style.display = "none";
                gameoverScreen.style.display = "flex";
                this.gameAudio.pause();
                this.lostAudio.play();
            }
        })
    }

    spawnBaddie = () => {
        let baddie1 = new Baddie(20, 20);
        this.baddieArray.push(baddie1);

        let baddie2 = new Baddie(300, 190);
        this.baddieArray.push(baddie2);

        let baddie3 = new Baddie(550, canvas.height - 55);
        this.baddieArray.push(baddie3);
    }

    // only draw the crown when all are caught OR dont create the crown only invoke spawn when the array is empty.

    gameLoop = () => {
        // i) clearing canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // ii) movements of the elements and other actions (at first leave empty)

        if (this.platformArray.length === 0) {
            this.spawnPlatforms();
        }

        if (this.confidenceArray.length === 0 && this.confidenceScore === 0) {
            this.spawnConfidence();
        }

        this.spawnBaddie();
        this.baddieArray.forEach(eachBaddie => {
            eachBaddie.baddieMove();
        }) 

        this.confidenceCollisionCheck();
        this.platformCollisionCheck();



        // iii) drawing the elements
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height) // draw canvas

        this.player.drawPlayer() // player


        this.platformArray.forEach(eachPlatform => {
            eachPlatform.drawPlatform();
          })

        this.confidenceArray.forEach(eachHeart => {
            eachHeart.drawConfidence()
        })  // draw those that are STILL in the Array (after splicing)

        this.baddieArray.forEach(eachBaddie => {
            eachBaddie.drawBaddie();
        }) 
        

        this.crownArray.forEach(eachCrown => {
                eachCrown.drawCrown();
        }) // draw the crown!

        this.wonOrLostCollisionCheck();

        // iv) request animation
        if (this.isGameRunning) {
           requestAnimationFrame(this.gameLoop)

           this.gameAudio.play();
        }
    }
}