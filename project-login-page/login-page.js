const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "dave" && password === "p@ssw0rd") {
        alert(`Welcome back ${username}`);
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;

    }

})

function autoRefreshPage() {
    window.location = window.location.href;
}
setInterval('autoRefreshPage()', 10000);