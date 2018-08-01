document.addEventListener("DOMContentLoaded", function (event) {

    var myGamePiece;
    var obstacles = []
    function startGame() {
        myGameArea.start();
        myGamePiece = new component(30, 30, "red", 10, 120);

        myObstacle1 = new component(50, 200, "green", 100, 120);
        obstacles.push(myObstacle1)    ;
        myObstacle2 = new component(50, 200, "green", 50, 20);
        obstacles.push(myObstacle2);
        myObstacle3 = new component(50, 200, "green", 400, 20);
        obstacles.push(myObstacle3);
        myObstacle4 = new component(50, 200, "green", 200, 20);
        obstacles.push(myObstacle4)

    }
    var direction = ''
    var myGameArea = {
        canvas: document.createElement("canvas"),
        start: function () {
            this.canvas.width = 1200;
            this.canvas.height = 800;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop: function () {
            console.log('eeharera');

            // clearInterval(this.interval);
            // if (myGamePiece) {

            // }
        }
    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.update = function () {
            ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        this.newPos = function () {
            console.log(myGamePiece.crashWith(myObstacle1))
            if (!myGamePiece.crashWith(myObstacle1)) {
                this.x += this.speedX;
                this.y += this.speedY;
                
            } 

            if (myGamePiece.crashWith(myObstacle1)) {
                this.x -= 4
            }

            
            
        };
        this.crashWith = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
    
            var touch = function () {
                if (myleft < otherright &&
                    myright > otherleft &&
                    mytop < otherbottom &&
                    mybottom > othertop) {
                    // console.log('true');
                    return true
                }
            }
            if ((myleft <= otherright &&
                    // myleft   <=   otherleft &&
                    // myright  <=  otherright &&
                    myright >= otherleft &&
                    mytop > othertop &&
                    mytop <= otherbottom &&
                    mybottom > othertop &&
                    mybottom > otherbottom) //&& touch()
            ) {
                console.log('touch top prefent W87');
                direction = 'w'
                // updateMove(direction)
                return true
            }
            if ((myleft <= otherright &&
                    // myleft   >=   otherleft &&
                    // myright  <=  otherright &&
                    myright >= otherleft &&
                    mytop < othertop &&
                    mytop < otherbottom &&
                    mybottom >= othertop &&
                    mybottom < otherbottom) // && touch()
            ) {
                console.log('touch bottom, prefent S83');
                return true
            }
            if ((myleft < otherright &&
                    myleft < otherleft &&
                    myright < otherright &&
                    myright >= otherleft &&
                    mytop <= otherbottom &&
                    mybottom >= othertop) //&& touch()
            ) {
                console.log('touch right, prefent D68');
                return true
            }
            if ((myleft <= otherright &&
                    myleft > otherleft &&
                    myright > otherright &&
                    myright > otherleft &&
                    mytop <= otherbottom &&
                    mybottom >= othertop) // && touch()
            ) {
                console.log('touch left, prefent A65');
                direction = 'a'
                return true
            }
        }
    }
    function updateMove(direction) {
        // debugger
        stopMove()
        if (direction === 'w') {
            myGamePiece.speedY += 100
            // debugger
        }
        if (direction === 'a') {
            stopMove()
            myGamePiece.speedX = 100
            // debugger
        }
    }

    function stopMove() {
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    }

    function updateGameArea() {
        obstacles.forEach((obst) =>{
            obst  

        })
        if (myGamePiece.crashWith(myObstacle1)) {
            // myGameArea.stop();
            // console.log('true crash');
            myGameArea.clear();
            stopMove()
            playerMove()
            myGamePiece.newPos();
            updateMove(direction)
            myGamePiece.update();
            myObstacle1.update();
            myObstacle2.update();
            myObstacle3.update();
            myObstacle4.update();
        } else {
            myGameArea.clear();
            stopMove()
            playerMove()
            myGamePiece.newPos();
            myGamePiece.update();
            myObstacle1.update();
            myObstacle2.update();
            myObstacle3.update();
            myObstacle4.update();
            // myObstacle5.update();
        }

    }
    

    const speed = 4
    var keys = [];

    function playerMove(e) {
        // console.log(e)
        if (keys[87]) {
            myGamePiece.speedY -= speed;
        }
        if (keys[83]) {
            myGamePiece.speedY += speed;
        }
        if (keys[65]) {
            myGamePiece.speedX -= speed;
        }
        if (keys[68]) {
            myGamePiece.speedX += speed;
        }
        return false;
    }

    document.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });

    document.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
    startGame()

})
