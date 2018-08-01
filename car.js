let cab = document.getElementById('car')

function ignition(){  
    cab.style.position = 'relative';
    cab.style.left = '0px';
    cab.style.top = '0px';
}

ignition()

document.addEventListener('keydown',function(event){
    console.log(event.keyCode)
    
    if (event.keyCode == 37 && cab.style.left !== '-70px' ){
        moveLeft()
    } else if (event.keyCode == 38 && cab.style.top !== '-20px'){
        moveUp()
    } else if (event.keyCode == 39 && cab.style.left !== '1020px'){
        moveRight()
    } else if (event.keyCode == 40 && cab.style.top !== '670px'){
        moveDown()
    }
})


function moveLeft() {
    cab.style.left = parseInt(cab.style.left) - 10 + 'px';
}
function moveUp() {
    cab.style.top = parseInt(cab.style.top) - 10 + 'px';
}
function moveRight() {
    cab.style.left = parseInt(cab.style.left) + 10 + 'px';
}
function moveDown() {
    cab.style.top = parseInt(cab.style.top) + 10 + 'px';
}
