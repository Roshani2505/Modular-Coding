import { displayTodos } from "./displayTodos.js";

if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Login first!");
    window.location.href = "login.html";
}

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json())
    .then(data => {
        displayTodos(data);
    })
    .catch(err => console.log(err));
