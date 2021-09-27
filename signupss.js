const username = document.querySelector('#user1')
const password = document.querySelector('#pass1')
username.innerHTML = localStorage.getItem("email")
password.innerHTML = localStorage.getItem("password")