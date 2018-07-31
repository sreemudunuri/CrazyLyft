

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    var curbThickness = 50;

    var carX = curbThickness/2;
    var carY= 550;

    var dx = 6
    var dy = 6

    function curbV1Left(){
        ctx.beginPath();
        ctx.rect(0, 0, curbThickness, 525);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

    }

    function curbV2Left(){
        ctx.beginPath();
        ctx.rect(0, 600, curbThickness, 300);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    function curbV1Right(){
        ctx.beginPath();
        ctx.rect(canvas.width - curbThickness, 0, curbThickness, canvas.height);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    function curbH1Top(){
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, curbThickness);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    function curbH1Bottom(){
        ctx.beginPath();
        ctx.rect(0, canvas.height - curbThickness, canvas.width, curbThickness);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    var curbVLeftBlock1X = 2*curbThickness
    var curbVLeftBlock1Y = 2*curbThickness

    function curbVLeftBlock1(){
        ctx.beginPath();
        ctx.rect(curbVLeftBlock1X, curbVLeftBlock1Y + 4, 550, 200);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    var curbVLeftBlock2X = 2*curbThickness
    var curbVLeftBlock2Y = curbVLeftBlock1Y + curbThickness + 200

    function curbVLeftBlock2(){
        ctx.beginPath();
        ctx.rect(curbVLeftBlock2X , curbVLeftBlock2Y, 550, 200);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    var curbVRightBlock1X =  curbVLeftBlock2X + 550 + curbThickness
    var curbVRightBlock1Y = 2*curbThickness + 25

    function curbVRightBlock1(){
        ctx.beginPath();
        ctx.rect(curbVRightBlock1X , curbVRightBlock1Y, 400, 400);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    function curbHBottomBlock1(){
        ctx.beginPath();
        ctx.rect(2*curbThickness , curbVLeftBlock2Y - 2 + 250 + curbThickness, 1000, 50);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }





    function drawCar(){
        ctx.beginPath();
        ctx.rect( carX, carY, 48,48);
        ctx.fillStyle = "#ff5264";
        ctx.fill();
        ctx.closePath();

    }





    function drawCurbs() {
        curbV1Left()
        curbV2Left()
        curbH1Top()
        curbH1Bottom()
        curbV1Right()
        curbVLeftBlock1()
        curbVLeftBlock2()
        curbVRightBlock1()
        curbHBottomBlock1()
    }


    var rightPressed = false;
    var leftPressed = false;

    var upPressed = false;
    var downPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        console.log(e)
        if(e.keyCode == 39) {
            rightPressed = true;
        } else if(e.keyCode == 37) {
            leftPressed = true;
        } else if(e.keyCode == 38) {
            upPressed = true;
        } else if (e.keyCode == 40) {
            downPressed = true;
        }
    }
    function keyUpHandler(e) {
        if(e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        } else if(e.keyCode == 38) {
            upPressed = false;
        } else if (e.keyCode == 40) {
            downPressed = false;
        }
    }



    function run() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawCurbs()
        drawCar()

        if(rightPressed) {
            if (carX + dx < canvas.width - 99) {
                carX += dx
            }
        } else if (leftPressed) {
            if (carX - dx > 49) {
                carX -= dx
            }
        } else if (upPressed) {
            if (carY - dy > 50) {
                carY -= dy
            }

        } else if (downPressed) {
            if (carY + dy < canvas.height - 99) {
                carY += dy
            }

        }


    }





