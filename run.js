document.addEventListener("DOMContentLoaded", function (event) {

    var myGamePiece;

    function startGame() {
        myGameArea.start();
        myGamePiece = new component(30, 30, "red", 10, 120);
        myObstacle1 = new component(10, 200, "green", 300, 120);
        myObstacle2 = new component(50, 200, "green", 100, 20);
    }

    var myGameArea = {
        canvas: document.createElement("canvas"),
        start: function () {
            this.canvas.width = 480;
            this.canvas.height = 270;
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
            this.x += this.speedX;
            this.y += this.speedY;
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
            // var crash = true;
            // if ((mybottom < othertop) ||
            //     (mytop > otherbottom) ||
            //     (myright < otherleft) ||
            //     (myleft > otherright)) {
            //     crash = false;
            // }
            // console.log(mybottom, mytop);
            // console.log(othertop);

            var touch = function () {
                
            
                if (myleft < otherright &&
                    myright > otherleft &&
                    mytop < otherbottom &&
                    mybottom > othertop) {
                    // console.log('true');
                    
                    return true   
                    }
                }
            var direction = ''
            if ((myleft   <=  otherright &&
                // myleft   <=   otherleft &&
                // myright  <=  otherright &&
                myright  >=   otherleft &&
                mytop     >    othertop &&
                mytop     <=   otherbottom &&
                mybottom   >  othertop  &&
                mybottom    >    otherbottom  )  //&& touch()
            ){
                console.log('touch top');
                direction = 's'
                // updateMove(direction)
                // return true
            }
            if ((myleft  <=   otherright &&
                // myleft   >=   otherleft &&
                // myright  <=  otherright &&
                myright  >=  otherleft &&
                mytop     <    othertop &&
                mytop     <   otherbottom &&
                mybottom   >=  othertop  &&
                mybottom    <    otherbottom  ) // && touch()
            ){
                 console.log('touch bottom');
            } 
            if ((myleft  <   otherright &&
                myleft   <   otherleft &&
                myright  <   otherright &&
                myright  >=  otherleft &&
                mytop   <=    otherbottom &&
                mybottom  >=  othertop  ) //&& touch()
            ) {
                console.log('touch right');
            }
            if ((myleft  <=   otherright &&
                myleft   >   otherleft &&
                myright  >   otherright &&
                myright  >  otherleft &&
                mytop     <=   otherbottom &&
                mybottom  >=  othertop  ) // && touch()
            ) {
                console.log('touch left');
            }
            
            

            

           
        }
        
        

    }
    // function collides(otherobj) {
    //     return	myleft < otherright &&
    //     myright > otherleft &&
    //     mytop < otherobj.y + otherbottom &&
    //     otherbottom > othertop;
    //     }
    function updateMove(direction) {
        // debugger
        if (direction === 's') {
            myGamePiece.speedY -=speed
        }
    }

    function stopMove() {
        myGamePiece.speedX = 0;
        myGamePiece.speedY = 0;
    }

    function updateGameArea() {
        
        if (myGamePiece.crashWith(myObstacle2)) {
            // myGameArea.stop();
            console.log('true crash');
            myGameArea.clear();
            stopMove()
            playerMove()
            myGamePiece.newPos();
            updateMove()
            // debugger
            myGamePiece.update();
            myObstacle1.update();
            myObstacle2.update();
        } else {
        myGameArea.clear();
        stopMove()
        playerMove()
        myGamePiece.newPos();
        myGamePiece.update();
        myObstacle1.update();
        myObstacle2.update();
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
