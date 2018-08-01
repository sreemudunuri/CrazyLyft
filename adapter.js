console.log('adapter is linked')

let userAPI = 'http://localhost:3000/api/v1/users'

let userAdapter = generateAdapter(userAPI)

let pointPostURL = 'http://localhost:3000/api/v1/scores'

function generateAdapter(apiURL){
    return {
        index: function(){
            return fetch(apiURL).then(res => res.json())
        },

        showUser: function(userID){
            return fetch(`${apiURL}/${userID}`).then(res => res.json())
        },

        createUser: function(name){
            let postConfig = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${name}`
                })
            }
            return fetch(apiURL, postConfig).then(res => res.json())
        },

        postScore: function(points, userID){
            let postConfig = {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        points: `${points}`,
                        user_id: `${userID}`
                    }
                )
            }

            return fetch(pointPostURL, postConfig).then(res => res.json())
        }
    }
}