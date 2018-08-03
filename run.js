// document.addEventListener("DOMContentLoaded", function (event) {

    var myGamePiece;
    var obstacles = []
    var car = new Image();
    car.src = "./car.svg"
    var pass = new Image()
    pass.src = "./skeleton-idle_15.png"
    var passangersArray = []
    function shuffle (array1, array2) {
        var i = 0
            , j = 0
            , temp1 = null
            , temp2 = null
        for (i = array1.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp1 = array1[i]
            temp2 = array2[i]
            array1[i] = array1[j]
            array2[i] = array2[j]
            array1[j] = temp1
            array2[j] = temp2
        }
    }




    var newPassangersArray = []
    var coin, coinImage
    var passPos = []
    
    
    function startGame() {
        myGameArea.start();
        myGamePiece = new carComponent(25, 25, "green", 28, 24);
        // myGamePiece

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
        
        newPassangersArray.push(sprite({ x:30 ,y:100 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:100 ,y:170 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:270 ,y:250 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:590 ,y:550 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:38 ,y:500 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:38 ,y:100 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:38 ,y:500 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:530 ,y:600 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:678 ,y:180 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:38 ,y:500 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:935 ,y:580 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:1020 ,y:580 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:530 ,y:180 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:1000 ,y:145 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:300 ,y:435 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:300 ,y:300 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:500 ,y:300 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:900 ,y:300 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:1090 ,y: 300, context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:38 ,y:720 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));
        newPassangersArray.push(sprite({ x:300 ,y:700 , context: canvas.getContext("2d"), width: 1000, height: 100, image: newPassImage, numberOfFrames: 10, ticksPerFrame: 4}));

        shuffle(newPassangersArray, passangersArray)
    }   
    // Create sprite sheet
    newPassImage = new Image();

    canvas = document.getElementById("myCanvas");
    // canvas.width = 100;
    // canvas.height = 100;


    // Create sprite
    
    newPassImage.src = "./coin-sprite-animation_v2.png";


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
        stop : function() {
            clearInterval(this.interval);
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
            passangersArray.push(new passanger( 30,30, 'green', that.x, that.y))
            // debugger
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
                // that.context.fillRect(that.x,that.y,100,100);
                // that.context.fillStyle = "#FF0000";
                that.context.drawImage(
                    that.image,
                    frameIndex * that.width / numberOfFrames,
                    0,
                    that.width / numberOfFrames,
                    that.height,
                    that.x - 30,
                    that.y -50,
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
            ctx.fillStyle = "rgba(255, 255, 255, 0.0)"
            ctx.fillRect(this.x, this.y, this.width, this.height);
            // ctx.drawImage(pass, this.x-20, this.y-40, this.width+40, this.height+50);
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

    function addBlood(passa) {
        var blood = new component(passa.x, passa.y, "black", 310, 330)
    }

    function checkAllPassangers() {
            if(myGamePiece.crashWith(passangersArray[0])) {
                addBlood(passangersArray[0])

                var PassengersIndex = passangersArray.indexOf(passangersArray[0])
                passangersArray.splice(PassengersIndex, 1)
                var newPassengersIndex = newPassangersArray.indexOf(newPassangersArray[0])
                newPassangersArray.splice(newPassengersIndex, 1)
                addPoints();
                addTime(); 
            }

    }

    // function checkAllNewPassangers() {
    //     // debugger
    //     if(myGamePiece.crashWith(newPassangersArray[0])) {
    //         console.log('test');
            
    //         var newPassengersIndex = newPassangersArray.indexOf(newPassangersArray[0])
    //         newPassangersArray.splice(newPassengersIndex, 1)
    //         }
    // }

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
        newPassangersArray[0].update()
        newPassangersArray[0].render()
        passangersArray[0].update()
        checkAllPassangers()
        playerMove()
        renderAllObsticals("rgba(255, 255, 255, 0.4)")
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
        if(keys[80]){
            addTime()
        }

        return false;
    }

    document.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });

    document.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });
    // startGame()

// })
