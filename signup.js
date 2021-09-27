const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    localStorage.setItem("email", e.target.querySelector("input[type = 'email']").value)
    localStorage.setItem("password", e.target.querySelector("input[type = 'password']").value)
    window.location.href = window.location.href.replace("/index.html", "/signup.html")
})

localStorage.clear()