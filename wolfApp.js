document.addEventListener("DOMContentLoaded", function(event) {

    var canvas = document.getElementById("myCanvas");
    canvas.width = 1200;
    canvas.height = 800;
    var c = canvas.getContext("2d");
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var car = new Image();
    car.src = "./car.svg"


    function Player () {
        this.x = 395;
        this.y = 295;
        this.w = 10;
        this.h = 10;
        } 

    var player1 = new Player();

    
    var keys = [];
    function playerMove(e){
        // console.log(e)
        if (keys[87]) {
            player1.y -= 1;
        }
        if (keys[83] ) {
            player1.y += 1;
        }
        if (keys[65] ) {
            player1.x -= 1;
        }
        if (keys[68] ) {
            player1.x += 1;
        }
        return false;
    }
    
    document.addEventListener("keydown", function (e) {
        keys[e.keyCode] = true;
    });
        
    document.addEventListener("keyup", function (e) {
        keys[e.keyCode] = false;
    });

    function mainDraw() {
        c.clearRect(0, 0, WIDTH, HEIGHT);
        c.fillStyle="red";
        c.strokeStyle="blue";
        c.rect(player1.x, player1.y, player1.w, player1.h);
        c.lineWidth=1;
        c.stroke();
        c.fill();
        playerMove();
        // debugger
        }
    
    setInterval(mainDraw, 20);
        

})




























var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var curbThickness = 10;

var carX = curbThickness/2;
var carY= 550;

var dx = 6
var dy = 6

var car = new Image();
car.src = "./taxi.png"
car.class = "car"

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
    ctx.fillStyle = "rgba(255, 255, 255, 0.0)";
    ctx.fill();
    ctx.closePath();
}

var curbVLeftBlock2X = 2*curbThickness
var curbVLeftBlock2Y = curbVLeftBlock1Y + curbThickness + 200

function curbVLeftBlock2(){
    ctx.beginPath();
    ctx.rect(curbVLeftBlock2X , curbVLeftBlock2Y, 550, 200);
    ctx.fillStyle = "rgba(255, 255, 255, 0.0)";
    ctx.fill();
    ctx.closePath();
}

var curbVRightBlock1X =  curbVLeftBlock2X + 550 + curbThickness
var curbVRightBlock1Y = 2*curbThickness + 25

function Curbs () {
    this.x = 395;
    this.y = 295;
    this.w = 10;
    this.h = 10;
    } 
    var Player1 = new Player();
function curbVRightBlock1(){
    ctx.beginPath();
    ctx.rect(curbVRightBlock1X , curbVRightBlock1Y, 400, 400);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}
function createPolygon() {
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(100,50);
    ctx.lineTo(50, 100);
    ctx.lineTo(180, 90);
    ctx.closePath();
    ctx.strokeStyle="red";
    ctx.stroke();
    ctx.fill();
}

function curbHBottomBlock1(){
    ctx.beginPath();
    ctx.rect(2*curbThickness , curbVLeftBlock2Y - 2 + 250 + curbThickness, 1000, 50);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}



function Player () {
    this.x = 395;
    this.y = 295;
    this.w = 98;
    this.h = 88;
    } 

var player1 = new Player();


function drawCar(){
    ctx.beginPath();
    // ctx.rect( carX, carY, 48,58);
    // ctx.fillStyle = "#ff5264";
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(car,player1.x, player1.y, player1.w, player1.h)
    console.log(player1.x,player1.y,player1.w, player1.h);
    

}

collin



function drawCurbs() {
    createPolygon()
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

const speed = 4
var keys = [];
function playerMove(e){
    // console.log(e)
    if (keys[87]) {
        player1.y -= speed;
    }
    if (keys[83] ) {
        player1.y += speed;
    }
    if (keys[65] ) {
        player1.x -= speed;
    }
    if (keys[68] ) {
        player1.x += speed;
    }
    return false;
}

document.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
    
document.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


function run() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCurbs()
    drawCar()
    playerMove()

}
setInterval(run, 10)
