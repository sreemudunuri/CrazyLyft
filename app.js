document.addEventListener("DOMContentLoaded", function (event) {


    let userForm = document.getElementById('username-form')

    userForm.addEventListener('submit', function(event){
        event.preventDefault()
        console.log(event.currentTarget[0].value)

        

        userAdapter.createUser(event.currentTarget[0].value)
        .then(res => {renderUserName(res)})
        .then(setInterval(run, 10))

    })


})



