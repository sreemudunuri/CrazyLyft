document.addEventListener("DOMContentLoaded", function (event) {
    
    var myGamePiece;
    var obstacles = []
    var car = new Image();
    car.src = "./car.svg"
    var pass = new Image()
    pass.src = "./skeleton-idle_15.png"
    var passangersArray = []
    var newPassangersArray = []
    var coin, coinImage
    var passPos = []
    
    
    function startGame() {
        myGameArea.start();
        myGamePiece = new carComponent(25, 25, "green", 28, 24);
        // myGamePiece

        // myObstacle1 = new component(1200, 10, "blue", 0, 0);
        // obstacles.push(myObstacle1) ;
        // myObstacle2 = new component(1200, 10, "blue", 0, 800);
        // obstacles.push(myObstacle2);
        // myObstacle3 = new component(5, 800, "blue", 0, 0);
        // obstacles.push(myObstacle3);
        // myObstacle4 = new component(5, 800, "blue", 1200, 0);
        // obstacles.push(myObstacle4)
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
        // myObstacle28 = new component(80, 140, "green", 900, 0);
        // obstacles.push(myObstacle28)
        // myObstacle29 = new component(80, 140, "green", 900, 0);
        // obstacles.push(myObstacle29)
        
        passPswos = [[38,100],[100,170],[270,250],[590,550],[38,500],[38,100],[38,500],[530,600],[678,180],[38,500],[935,580],[1020,580],[38,500]]
        pass1 = new passanger( 25,25, 'green', passPos[0][0],passPos[0][1])
        passangersArray.push(pass1)
        pass2 = new passanger( 25,25, 'green', passPos[1][0],passPos[1][1])
        passangersArray.push(pass2)
        pass3 = new passanger( 25, 25, 'green', passPos[2][0],passPos[2][1])
        passangersArray.push(pass3)
        pass4 = new passanger( 25, 25, 'green', passPos[3][0],passPos[3][1])
        passangersArray.push(pass4)
        pass5 = new passanger( 25, 25, 'green', passPos[4][0],passPos[4][1])
        passangersArray.push(pass5)
        pass6 = new passanger( 25, 25, 'green', passPos[5][0],passPos[5][1])
        passangersArray.push(pass6)
        pass7 = new passanger( 25, 25, 'green', passPos[6][0],passPos[6][1])
        passangersArray.push(pass7)
        pass8 = new passanger( 25, 25, 'green', passPos[7][0],passPos[7][1])
        passangersArray.push(pass8)
        pass9 = new passanger( 25, 25, 'green', passPos[8][0],passPos[8][1])
        passangersArray.push(pass9)
        pass10 = new passanger( 25, 25, 'green', passPos[9][0],passPos[9][1])
        passangersArray.push(pass10)
        pass11 = new passanger( 25, 25, 'green', passPos[10][0],passPos[10][1])
        passangersArray.push(pass11)
        pass12 = new passanger( 25, 25, 'green',passPos[11][0],passPos[11][1])
        passangersArray.push(pass12)
        pass13 = new passanger( 25, 25, 'green', passPos[12][0],passPos[12][1])
        passangersArray.push(pass13)
        // pass13 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass13)
        // pass14 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass14)
        // pass15 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass15)
        // pass16 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass16)
        // pass17 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass17)
        // pass18 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass18)
        // pass19 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass19)
        // pass20 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass20)
        // pass21 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass21)
        // pass22 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass22)
        // pass23 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass23)
        // pass24 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass24)
        // pass25 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass25)
        // pass26 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass26)
        // pass27 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass27)
        // pass28 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass28)
        // pass29 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass29)
        // pass30 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass30)
        // pass31 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass31)
        // pass32 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass32)
        // pass33 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass33)
        // pass34 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass34)
        // pass35 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass35)
        // pass36 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass36)
        // pass37 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass37)
        // pass38 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass38)
        // pass39 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass39)
        // pass40 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass40)
        // pass41 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass41)
        // pass42 = new passanger( 25, 25, 'green', 38, 500)
        // passangersArray.push(pass42)
        newPass1 = sprite({ x:430, y: 500, context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 2
        });
        newPassangersArray.push(newPass1)
        newPass2 = sprite({x:100, y: 100, context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4
        });

        newPassangersArray.push(newPass2)
        newPass3 = sprite({ x:900, y: 700,context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4
        });
  
        newPassangersArray.push(newPass3)
    }

    // Create sprite sheet
    newPassImage = new Image();

    canvas = document.getElementById("myCanvas");
    // canvas.width = 100;
    // canvas.height = 100;


    // Create sprite
    
    newPassImage.src = "./coin-sprite-animation_v1.png";


    var direction = ''
    var myGameArea = {
        canvas: document.getElementById("myCanvas"),
        start: function () {
            // this.canvas.width = 1200;
            // this.canvas.height = 800;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
            this.interval = setInterval(updateGameArea, 20);
        },
        clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
    }

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
            that.x = options.x;
            that.y = options.y
    
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
                that.context.fillRect(that.x,that.y,100,100);
                that.context.fillStyle = "#FF0000";
                that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    that.x,
                    that.y,
                    (that.width / numberOfFrames)/1,
                    that.height/1
                );
            };
    
            return that;
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
        this.update = function () {
            ctx = myGameArea.context;
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
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
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            ctx.restore();
        }

        this.update = function () {
            ctx = myGameArea.context;
            // ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            // ctx.fillRect(this.x, this.y, this.width, this.height);
            // ctx.translate(canvas.width/2,canvas.height/2);
            // ctx.rotate(90*Math.PI/180);
            ctx.drawImage(car,this.x-15, this.y-20, this.width+30, this.height+50)
        };
        // this.newPos = function() {
        //     this.angle += this.moveAngle 
        //     this.x += this.speed ;
        //     this.y -= this.speed ;
        // };
        this.crashWith = function (otherobj) {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var otherleft = otherobj.x;
            var otherright = otherobj.x + (otherobj.width);
            var othertop = otherobj.y;
            var otherbottom = otherobj.y + (otherobj.height);
    
            // var touch = function () {
            if (myleft - 4 < otherright &&
                myright + 4 > otherleft &&
                mytop - 4 < otherbottom &&
                mybottom + 4 > othertop) {
                // console.log('true');
                return true
            }

        }
    }

    // function stopMove() {
    //     myGamePiece.speedX = 0;
    //     myGamePiece.speedY = 0;
    // }

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
            // debugger
        })
    }

    function checkAllPassangers() {
            if(myGamePiece.crashWith(passangersArray[0])) {
                // add points function here
                //make the object disappear
                // var passengersIndex = passangersArray.indexOf(p)
                // passangersArray.splice(passengersIndex, 1)
                console.log('hello');
                
            }

    }

    function renderAllPassangers(color){
        if (passangersArray[0]) {
            console.log(passangersArray)
            passangersArray[0].update(color)
        }
    }

    function checkAllNewPassangers() {
        // debugger
        if(myGamePiece.crashWith(newPassangersArray[0])) {
            console.log('test');
            
            var newPassengersIndex = newPassangersArray.indexOf(newPassangersArray[0])
            newPassangersArray.splice(newPassengersIndex, 1)
            }
    }

    function updateAllNewPassangers(){
        if (newPassangersArray[0]) {
            console.log(newPassangersArray)
            newPassangersArray[0].update()
        }
    }

    function renderAllNewPassangers(){
        if (newPassangersArray[0]) {
            console.log(newPassangersArray)
            newPassangersArray[0].render()
        }
    }

    function updateGameArea() {
        myGameArea.clear();
        checkAllObsticals()
        // checkAllPassangers()
        newPassangersArray[0].render()
        newPassangersArray[0].update()
        checkAllNewPassangers()

        playerMove()
        // updateAllNewPassangers()
        // renderAllNewPassangers();
        // renderAllPassangers();
        renderAllObsticals("rgba(255, 255, 255, 0.4)")
        // myGamePiece.newPos();
        // myGamePiece.update();
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
    startGame()

})
