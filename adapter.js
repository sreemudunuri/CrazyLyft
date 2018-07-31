console.log('adapter is linked')

let userAPI = 'http://localhost:3000/api/v1/users'

let userAdapter = generateAdapter(userAPI)

function generateAdapter(apiURL){
    return {
        index: function(){
            return fetch(apiURL).then(res => res.json()).then(console.log)
        },

        create: function(name){
            let postConfig = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: `${name}`
                })
            }
            return fetch(apiURL, postConfig).then(res => res.json()).then(console.log)
        }
    }
}