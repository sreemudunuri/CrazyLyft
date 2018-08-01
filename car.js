let cab = document.getElementById('car')

function ignition(){  
    cab.style.position = 'relative';
    cab.style.left = '0px';
    cab.style.top = '0px';
}

ignition()

document.addEventListener('keydown',function(event){
    console.log(event.keyCode)
    
    if (event.keyCode == 37 ){
        moveLeft()
    } else if (event.keyCode == 38){
        moveUp()
    } else if (event.keyCode == 39){
        moveRight()
    } else if (event.keyCode == 40){
        moveDown()
    }
})


function moveLeft() {
    cab.style.left = parseInt(cab.style.left) - 5 + 'px';
}
function moveUp() {
    cab.style.top = parseInt(cab.style.top) - 5 + 'px';
}
function moveRight() {
    cab.style.left = parseInt(cab.style.left) + 5 + 'px';
}
function moveDown() {
    cab.style.top = parseInt(cab.style.top) + 5 + 'px';
}
