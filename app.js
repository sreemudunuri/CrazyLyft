document.addEventListener("DOMContentLoaded", function (event) {


    let userForm = document.getElementById('username-form')

    userForm.addEventListener('submit', function(event){
        event.preventDefault()
        console.log(event.currentTarget[0].value)

        event.currentTarget[0].value = ""

        userAdapter.showUser(1).then(res => {
            renderUserName(res)
        }) 

        // setInterval(run, 10)
    })


})



