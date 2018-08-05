let usernameBox = document.getElementById('username-box')


function renderUserName(userObj){
                  
    let userHTML =  `<div class="card bg-danger text-white">
                        <div class="card-body" id = '${userObj.id}'>
                            <h2 class="card-title">${userObj.name}</h2>
                            <p><strong> ID: ${userObj.id} </strong> </p>
                        </div>
                    </div><br>`
                    

    usernameBox.innerHTML = userHTML
    
}