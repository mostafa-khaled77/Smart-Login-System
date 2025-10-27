var userLoginEmail = document.getElementById("userLoginEmail");
var userLoginPassword = document.getElementById("userLoginPassword");
var errorMessage = document.getElementById("errorMessage");
togglePassword.addEventListener("click", function () {
  var passType =
    userLoginPassword.getAttribute("type") === "password" ? "text" : "password";
  userLoginPassword.setAttribute("type", passType);
  togglePassword.classList.toggle("fa-eye-slash");
});

function loginValidation() {
  var userDataStorage = JSON.parse(localStorage.getItem("userData")) || [];
  var emailFound = false;
  var passFound = false;

  for (var i = 0; i < userDataStorage.length; i++) {
    if (userDataStorage[i].email === userLoginEmail.value) {
      emailFound = true;
      if (userDataStorage[i].pass === userLoginPassword.value) {
        passFound = true;
      }
      break;
    }
  }
  if (!emailFound) {
    errorMessage.textContent = "Email Not Found !";
    errorMessage.classList.replace("d-none", "d-block");
  } else if (!passFound) {
    errorMessage.textContent = "InCorrect Password !";
    errorMessage.classList.replace("d-none", "d-block");
  } else {
    localStorage.setItem("currentUserEmail", userLoginEmail.value);
    window.location.href = "home.html";
  }
}
