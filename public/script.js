function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("error");

  // Credenciales hardcodeadas
  const validUser = "admin";
  const validPass = "1234";

  if (user === validUser && pass === validPass) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos";
  }
}
