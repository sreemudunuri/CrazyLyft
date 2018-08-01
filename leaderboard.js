let canvasDiv = document.getElementById('canvas-div')


let finalScore = parseInt(document.getElementById('score').innerText)

function renderFinalScore(scoreObj){
    let scoreDisplayHTML =  `<div class="jumbotron">
             <h1 class="display-4">You picked up ${scoreObj.points} passengers!</h1>
            </div>`
    canvasDiv.innerHTML = scoreDisplayHTML        
}


function postAndRenderFinalScore(){
    userAdapter.postScore(finalScore, parseInt(document.getElementsByClassName('card-body')[0].id)).then(res => {
        debugger;
        renderFinalScore(res)
    })
}
