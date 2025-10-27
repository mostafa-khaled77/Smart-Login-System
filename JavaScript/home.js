var welcomeText = document.getElementById("welcomeText");

var userDataStorage = JSON.parse(localStorage.getItem("userData")) || [];
var currentUserEmail = localStorage.getItem("currentUserEmail");

var currentUser = null;

for (var i = 0; i < userDataStorage.length; i++) {
  if (userDataStorage[i].email === currentUserEmail) {
    currentUser = userDataStorage[i];
    break;
  }
}
if (currentUser) {
  welcomeText.textContent = "Welcome, " + currentUser.name;
}
