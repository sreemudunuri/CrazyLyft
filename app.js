document.addEventListener("DOMContentLoaded", function (event) {
    
    let userForm = document.getElementById('username-form')

    userForm.addEventListener('submit', function(event){
        event.preventDefault()
        
       
        userAdapter.createUser(event.currentTarget[0].value)
        .then(res => {renderUserName(res)})
        .then(setInterval(run, 10))
        .then(manageTheClock)

    })

    canvasDiv.addEventListener("click",function(event){
        if (event.target.dataset.playagain){
            location.reload();
        }
    })

})



