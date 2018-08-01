let timerHTML = document.getElementById('timer')

let timer = parseInt(document.getElementById('timer').innerText)

const countDown = () => {
    // console.log(timer)
    timerHTML.innerText = timer--
}

const add5sec = () => {
    timerHTML.innerText = (timer +=5) 
}

const timerCheck = (countdownFn) => {
    if (timer === 0) {
        clearInterval(countdownFn)
        timerHTML.innerHTML = `<h3>Time's Up!</h3>`
    }
}

const manageTheClock = () => {

    let startTheClock = setInterval(countDown, 1000)

    setInterval( () => {
        timerCheck(startTheClock)
    }, 1000  )
    

}

// let startTheClock = setInterval(countDown, 1000)