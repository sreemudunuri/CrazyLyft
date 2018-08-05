let timerHTML = document.getElementById('timer')

let timer = parseInt(document.getElementById('timer').innerText)

let clockMonitor;

const countDown = () => {
    // console.log(timer)
    timerHTML.innerText = timer--
}

const addTime = () => {
    timerHTML.innerText = (timer +=2) 
}

const timerCheck = (countdownFn) => {
    if (timer === 0) {
        clearInterval(countdownFn)
        timerHTML.innerHTML = `<h3>Time's Up!</h3>`
        clearInterval(clockMonitor)
        postAndRenderFinalScore()
    }
}

const manageTheClock = () => {

    let startTheClock = setInterval(countDown, 1000)
    clockMonitor = setInterval( () => {
        timerCheck(startTheClock)
    }, 1000)

}
