document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));
    let email = document.getElementById("email").value;
    let pwd = document.getElementById("password").value;

    if (storedUser && storedUser.email === email && storedUser.password === pwd) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "todos.html";
    } else {
        alert("Invalid email or password");
    }
});
