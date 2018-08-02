class Robot {


    constructor() {
        this.x = 0
        this.y = 0
        this.coordinates = [this.x, this.y]
        this.bearing = 'north'
    }

    setCoordinates(x, y) {
        this.coordinates = [x, y]
    }

    setBearing(direct) {
        const directions = ["north", "south", "east", "west"];
        if (directions.includes(direct)) {
            this.bearing = direct
        } else {
            throw "Invalid Robot Bearing"
        }
    }

    place(hash) {
        let x = hash["x"]
        let y = hash["y"]
        let direction = hash["direction"]
        this.setCoordinates(x, y)
        this.setBearing(direction)
    }

    turnRight() {
        switch (this.bearing) {
            case 'north':
                this.bearing = 'east'
                break;
            case 'east':
                this.bearing = 'south'
                break;
            case 'south':
                this.bearing = 'west'
                break;
            case 'west':
                this.bearing = 'north'
                break;
            default:
                "wrong input"
        }
    }

    turnLeft() {
        switch (this.bearing) {
            case 'north':
                this.bearing = 'west'
                break;
            case 'east':
                this.bearing = 'north'
                break;
            case 'south':
                this.bearing = 'east'
                break;
            case 'west':
                this.bearing = 'south'
                break;
            default:
                "wrong input"
        }
    }
    advance() {
        let location = this.bearing
        switch (location) {
            case 'north':
                ++this.coordinates[1]
                break;
            case 'south':
                --this.coordinates[1]
                break;
            case 'east':
                ++this.coordinates[0]
                break;
            case 'west':
                --this.coordinates[0]
                break;
            default:
                "Wrong input"
        }
    }
    reverse() {
        let location = this.bearing
        switch (location) {
            case 'north':
                --this.coordinates[1]
                break;
            case 'south':
                ++this.coordinates[1]
                break;
            case 'east':
                --this.coordinates[0]
                break;
            case 'west':
                ++this.coordinates[0]
                break;
            default:
                "Wrong input"
        }
    }

    // translateInstructions(instruction) {
    //     let instructions = instruction.split("")
    //     for (let i = 0; i < instructions.length; i++) {
    //         switch (instructions[i]) {
    //             case 'L':
    //                 this.turnLeft()
    //                 break;
    //             case 'R':
    //                 this.turnRight()
    //                 break;
    //             case 'A':
    //                 this.advance()
    //                 break;
    //             default:
    //                 "I don't know"
    //         }
    //     }
    // }
    



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