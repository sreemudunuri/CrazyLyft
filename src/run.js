    var myGamePiece;
    var obstacles = []
    var car = new Image();
    car.src = "assets/car.svg"
    var pass = new Image()
    pass.src = "assets/skeleton-idle_15.png"
    var passangersArray = []
    function shuffle (array) {
        var i = 0
            , j = 0
            , temp = null

        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }

    function startGame() {
        myGameArea.start();
        myGamePiece = new carComponent(25, 25, "green", 28, 24);

        myObstacle5 = new component(120, 90, "black", 310, 330);
        obstacles.push(myObstacle5)
        myObstacle6 = new component(120, 90, "black", 714, 330);
        obstacles.push(myObstacle6)
        myObstacle7 = new component(120, 90, "black", 1125, 330);
        obstacles.push(myObstacle7)
        myObstacle8 = new component(80, 140, "black", 85, 0);
        obstacles.push(myObstacle8)
        myObstacle9 = new component(80, 140, "rgba(255, 255, 255, 0.4)", 490, 0);
        obstacles.push(myObstacle9)
        myObstacle11 = new component(190, 100, "black", 230, 60);
        obstacles.push(myObstacle11)
        myObstacle12 = new component(190, 100, "black", 630, 60);
        obstacles.push(myObstacle12)
        myObstacle13 = new component(190, 100, "black", 1050, 60);
        obstacles.push(myObstacle13)
        myObstacle14 = new component(190, 70, "#FF0000", 310, 210);
        obstacles.push(myObstacle14)
        myObstacle15 = new component(190, 70, "black", 720, 210);
        obstacles.push(myObstacle15)
        myObstacle16 = new component(90, 190, "black", 165, 215);
        obstacles.push(myObstacle16)
        myObstacle17 = new component(90, 190, "black", 570, 215);
        obstacles.push(myObstacle17)
        myObstacle18 = new component(90, 190, "black", 975, 215);
        obstacles.push(myObstacle18)
        myObstacle19 = new component(90, 210, "green", 80, 340);
        obstacles.push(myObstacle19)
        myObstacle20 = new component(90, 210, "green", 480, 340);
        obstacles.push(myObstacle20)
        myObstacle21 = new component(90, 210, "green", 1130, 470);
        obstacles.push(myObstacle21)
        myObstacle22 = new component(90, 210, "green", 890, 340);
        obstacles.push(myObstacle22)
        myObstacle23 = new component(110, 220, "green", 720, 470);
        obstacles.push(myObstacle23)
        myObstacle24 = new component(110, 220, "green", 320, 470);
        obstacles.push(myObstacle24)
        myObstacle25 = new component(80, 180, "green", 170, 630);
        obstacles.push(myObstacle25)
        myObstacle26 = new component(80, 180, "green", 580, 630);
        obstacles.push(myObstacle26)
        myObstacle27 = new component(80, 180, "green", 980, 630);
        obstacles.push(myObstacle27)

        pass1 = new passanger( 25,25, 'green', 38, 100)
        passangersArray.push(pass1)
        pass2 = new passanger( 25,25, 'green', 100, 170)
        passangersArray.push(pass2)
        pass3 = new passanger( 25, 25, 'green', 270, 250)
        passangersArray.push(pass3)
        pass4 = new passanger( 25, 25, 'green', 590, 550)
        passangersArray.push(pass4)
        pass5 = new passanger( 25, 25, 'green', 38, 500)
        passangersArray.push(pass5)
        pass6 = new passanger( 25, 25, 'green', 38, 100)
        passangersArray.push(pass6)
        pass7 = new passanger( 25, 25, 'green', 38, 500)
        passangersArray.push(pass7)
        pass8 = new passanger( 25, 25, 'green', 530, 600)
        passangersArray.push(pass8)
        pass9 = new passanger( 25, 25, 'green', 678, 180)
        passangersArray.push(pass9)
        pass10 = new passanger( 25, 25, 'green', 38, 500)
        passangersArray.push(pass10)
        pass11 = new passanger( 25, 25, 'green', 935, 580)
        passangersArray.push(pass11)
        pass12 = new passanger( 25, 25, 'green', 1020, 580)
        passangersArray.push(pass12)
        pass13 = new passanger( 25, 25, 'green', 530, 180)
        passangersArray.push(pass13)
        pass14 = new passanger( 25, 25, 'green', 1000, 145)
        passangersArray.push(pass14)
        pass15 = new passanger( 25, 25, 'green', 300, 435)
        passangersArray.push(pass15)
        pass16 = new passanger( 25, 25, 'green',300, 300)
        passangersArray.push(pass16)
        pass17 = new passanger( 25, 25, 'green', 500, 300)
        passangersArray.push(pass17)
        pass18 = new passanger( 25, 25, 'green', 900, 300)
        passangersArray.push(pass18)
        pass19 = new passanger( 25, 25, 'green', 1090, 300)
        passangersArray.push(pass19)
        pass20 = new passanger( 25, 25, 'green', 700, 300)
        passangersArray.push(pass20)
        pass21 = new passanger( 25, 25, 'green', 38, 720)
        passangersArray.push(pass21)
        pass22 = new passanger( 25, 25, 'green', 300, 700)
        passangersArray.push(pass22)

        shuffle(passangersArray)

        // sprite
    function sprite(options) {
        var that = {},
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
        numberOfFrames = options.numberOfFrames || 1;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height
            );
        };

        return that;
    }

    }
    var direction = ''
    var myGameArea = {
        canvas: document.getElementById("myCanvas"),
        start: function () {
            // this.canvas.width = 1200;
            // this.canvas.height = 800;
            this.context = this.canvas.getContext("2d");
            canvasDiv.appendChild(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
    }

    function passanger(width, height, color, x, y) {
        
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.update = function (color) {
            ctx = myGameArea.context;
            ctx.beginPath();
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(pass, this.x-20, this.y-40, this.width+40, this.height+50);
            ctx.fill();
            ctx.closePath()
        };
    }

    function component(width, height, color, x, y) {
        
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.update = function (color) {
            ctx = myGameArea.context;
            ctx.beginPath();
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fill();
            ctx.closePath()
        };
    }

    function carComponent(width, height, color, x, y) {

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.moveAngle = 180
        this.drawImage = function (deg, color){
            ctx.save();
            ctx.translate(this.x+this.width/2, this.y+this.height/2);
            ctx.rotate(deg*Math.PI/180.0);
            ctx.translate(-this.x-this.width/2, -this.y-this.height/2);
            ctx.drawImage(car, this.x-20, this.y-40, this.width+40, this.height+90);
            ctx.fillRect(this.x, this.y, this.width, this.height)
            ctx.fillStyle = color;
            ctx.restore();
        }

        this.update = function () {
            ctx = myGameArea.context;
            ctx.drawImage(car,this.x-15, this.y-20, this.width+30, this.height+50)
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

                if (myleft - 4 < otherright &&
                    myright + 4 > otherleft &&
                    mytop - 4 < otherbottom &&
                    mybottom + 4 > othertop) {
                    // console.log('true');
                    return true
                }
        }
    }

    function checkAllObsticals() {
        var res = []
        obstacles.forEach((obst) =>{
            if(myGamePiece.crashWith(obst)) {
                res.push('x')
            }
        })
        return res.length > 0 ? true : false
    }

    function renderAllObsticals(color) {
        obstacles.forEach((ob)=>{
            ob.update(color)
        })
    }

    function checkAllPassangers() {
            if(myGamePiece.crashWith(passangersArray[0])) {
                // add points function here
                
                //make the object disappear
                var passengersIndex = passangersArray.indexOf(passangersArray[0])
                passangersArray.splice(passengersIndex, 1)
                addPoints()
                addTime()
            }
    }




    function renderAllPassangers(color){
        if (passangersArray[0]) {

            passangersArray[0].update(color)
        }
    }

    function updateGameArea() {

        checkAllObsticals()
        checkAllPassangers()
        // debugger
        myGameArea.clear();

        playerMove()
        renderAllPassangers("white");
        renderAllObsticals("rgba(255, 255, 255, 0.0)")

        myGamePiece.drawImage(dir, "green");
    }
 
    const speed = 4
    const slowD = 3
    var keys = [];
    var dir = 0
    function playerMove(e) {
        // key W
        if (keys[87] && !checkAllObsticals() && myGamePiece.y > 2) {
            dir = 180
            myGamePiece.y -= speed;
        } 
        if (keys[87] && checkAllObsticals() && myGamePiece.y > 2 ){
            myGamePiece.y -= speed - slowD ;
            dir = 180
        } //key S
        if (keys[83] && !checkAllObsticals() && myGamePiece.y < 800 - myGamePiece.height -2)  {
            dir = 0
            myGamePiece.y += speed ;
        }
        if (keys[83] && checkAllObsticals() && myGamePiece.y < 800 - myGamePiece.height -2 ) {
            dir = 0
            myGamePiece.y += speed - slowD;
        }
        if(keys[87] && keys[68]){
            dir = 45
        } // key A
        if (keys[65] && !checkAllObsticals() && myGamePiece.x > 2 ){
            dir = 90
            myGamePiece.x -= speed;
        }
        if (keys[65] && checkAllObsticals() && myGamePiece.x > 2 ){
            dir = 90
            myGamePiece.x -= speed - slowD;
        } // key D
        if (keys[68] && !checkAllObsticals() &&  myGamePiece.x < 1200 - myGamePiece.width - 2){
            dir = 270
            myGamePiece.x += speed;
        }
        if (keys[68] && checkAllObsticals() && myGamePiece.x < 1200 - myGamePiece.width - 2) {
            dir = 270
            myGamePiece.x += speed - slowD;
        }

        return false;
    }

    document.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });

    document.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
