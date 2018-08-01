let canvasDiv = document.getElementById('canvas-div')


let finalScore = parseInt(document.getElementById('score').innerText)

function renderFinalScore(scoreObj){
    let scoreDisplayHTML =  `<div class="jumbotron">
             <h1 class="display-4">You picked up ${scoreObj.points} passengers!</h1>
            </div><br><h2>High Scores:</h2>`
    canvasDiv.innerHTML = scoreDisplayHTML        
}


function makeLeaderBoardHTML(userArr){
    let boardHTML = userArr.map(function(userElement){
        
        return `
             <p class="lead">${userElement.name}: ${Math.max(...(userElement.scores.map(function (element) {
                return element.points
            })))}   </p>
            `
    }).join("")
    canvasDiv.innerHTML += boardHTML
}

function renderLeaderBoard(){
    userAdapter.index().then(res => {
       
        makeLeaderBoardHTML(res)
    })
}


function postAndRenderFinalScore(){
    userAdapter.postScore(finalScore, parseInt(document.getElementsByClassName('card-body')[0].id)).then(res => {
        
        renderFinalScore(res)
    }).then(renderLeaderBoard)
}
