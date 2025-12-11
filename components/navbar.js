export function navbar() {
  let user = JSON.parse(localStorage.getItem("user"));
  let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  let profileImg = localStorage.getItem("profileImg");

  return `
    <nav style="
      padding:10px;
      background:#222;
      color:white;
      display:flex;
      justify-content:space-between;
      align-items:center;
    ">

      <!-- Left Buttons -->
      <div style="display:flex; gap:15px;">
        <button onclick="location.href='index.html'" style="padding:6px 12px;">Home</button>
        <button onclick="location.href='signup.html'" style="padding:6px 12px;">Signup</button>
        <button onclick="location.href='login.html'" style="padding:6px 12px;">Login</button>
        <button onclick="location.href='todos.html'" style="padding:6px 12px;">Todos</button>
        <button onclick="location.href='profile.html'" style="padding:6px 12px;">Profile</button>
      </div>

      <!-- Right Profile Section -->
      <div style="display:flex; gap:10px; align-items:center;">

        ${
          isLoggedIn
            ? `
              <img 
                src="${profileImg ? profileImg : 'https://via.placeholder.com/40'}" 
                style="width:40px; height:40px; border-radius:50%; object-fit:cover;" 
              />
              <span>${user?.name || "User"}</span>
              <button id="logoutBtn" style="padding:6px 12px; background:red; color:white;">Logout</button>
            `
            : `<span>Guest</span>`
        }

      </div>
    </nav>
  `;
}

// Global Logout Handler
document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "logoutBtn") {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out!");
    location.href = "index.html";
  }
});
