console.log('adapter is linked')

let userAPI = 'http://localhost:3000/api/v1/users'

let userAdapter = generateAdapter(userAPI)

function generateAdapter(apiURL){
    return {
        index: function(){
            fetch(apiURL).then(res => res.json()).then(console.log)
        }
    }
}