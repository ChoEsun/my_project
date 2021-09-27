const form = document.querySelector("form")


document.querySelector(".form-signin input[type = 'email']").value = localStorage.getItem("email")
document.querySelector(".form-signin input[type = 'password']").value = localStorage.getItem("password")


localStorage.clear()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    window.location.href = window.location.href.replace("/signin.html", "/game_start.html")


})

///const login_btn = document.querySelector('signup-form');
//sign_up_btn.addEventListener('click', () => {
//signup - form.classlist.add('sign-up-mode');
//location.href = "/game_start.html"
//})