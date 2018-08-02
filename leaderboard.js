let canvasDiv = document.getElementById('canvas-div')

let finalScore = parseInt(document.getElementById('score').innerText)
let leaderBoard = document.createElement('div')

function renderFinalScore(scoreObj){
    // let scoreDisplayHTML =  `<div class="jumbotron">
    //          <h1 class="display-4">You picked up ${scoreObj.points} passengers!</h1><button class="btn btn-danger" data-playagain = "playagain" type="submit">Play Again!</button>
    //         </div><br>`
    // canvasDiv.appendChild = scoreDisplayHTML  
    
    leaderBoard.setAttribute('class', 'jumbotron')
    leaderBoard.innerHTML = `<h1 class="display-4">You picked up ${scoreObj.points} passengers!</h1><button class="btn btn-danger" data-playagain = "playagain" type="submit">Play Again!</button>`

    canvasDiv.appendChild(leaderBoard)
    
}


function makeLeaderBoardHTML(userArr){
    let highScores =[]
    userArr.forEach(function(userElement){

        let newObj = {
            name: userElement.name, 
            highScore: Math.max(...(userElement.scores.map(function (element) {
                return element.points
            })))
        }
        highScores.push(newObj)
    })
  
    let sortedBoardObjs = highScores.sort(function (a, b) {
        return a.highScore > b.highScore;
    }).reverse()

    let boardHTML = sortedBoardObjs.map(function(Obj){
        return `
             <p class="lead">${Obj.name}: ${Obj.highScore}   </p>
            `
    }).join("")

    leaderBoard.innerHTML += `<hr><h2>High Scores:</h2>${boardHTML}`
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
