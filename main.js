let nome = document.querySelector("#name")
let bio = document.querySelector("#bio")
let user = document.querySelector("#user")
let avatar = document.querySelector(".profile-pic")

function getInfos(){
   const apiUrl = "https://api.github.com/users/vini54"
   fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
         nome.innerText = data.name
         bio.innerText = data.bio
         user.innerHTML += data.login
         user.href = data.html_url
         avatar.src = data.avatar_url
      })
}
getInfos()