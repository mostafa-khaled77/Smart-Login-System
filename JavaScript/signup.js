// var userName = document.getElementById("userName");
// var userEmail = document.getElementById("userEmail");
// var userpassword = document.getElementById("userpassword");
// var notValid = document.getElementById("notValid");
// var isValid = document.getElementById("isValid");

// var regExp = {
//   name: /^[A-Z][a-z]{3,}$/,
//   email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
//   pass: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
// };

// var dataStorage = [];
// dataStorage = JSON.parse(localStorage.getItem("userData")) || [];

// function signUpValidation() {
//   if (!regExp.name.test(userName.value)) {
//     notValid.textContent = "Enter Valid Name";
//     notValid.classList.replace("d-none", "d-block");
//     return;
//   }
//   if (!regExp.email.test(userEmail.value)) {
//     notValid.textContent = "Enter Valid Email";
//     notValid.classList.replace("d-none", "d-block");
//     return;
//   }
//   if (!regExp.pass.test(userpassword.value)) {
//     notValid.textContent = "Enter valid Password";
//     notValid.classList.replace("d-none", "d-block");
//     return;
//   }
//   var userData = {
//     userName: userName.value,
//     userEmail: userEmail.value,
//     UserPass: userpassword.value,
//   };
//   dataStorage.push(userData);
//   localStorage.setItem("userData", JSON.stringify(dataStorage));
//   isValid.textContent = "Account Created Successfully!";
//   isValid.classList.replace("d-none", "d-block");
//   notValid.classList.replace("d-block", "d-none");

//   setTimeout(() => {
//     window.location.href = "login.html";
//   }, 1000);
// }

var userName = document.querySelector("#userName");
var userEmail = document.querySelector("#userEmail");
var userpassword = document.querySelector("#userpassword");
var isValid = document.querySelector("#isValid");
var notValid = document.querySelector("#notValid");
var togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {
  var passType =
    userpassword.getAttribute("type") === "password" ? "text" : "password";
  userpassword.setAttribute("type", passType);
  togglePassword.classList.toggle("fa-eye-slash");
});

var regExp = {
  name: /^[A-Z][a-z]{3,}$/,
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/,
  pass: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
};

var dataStorage = [];
dataStorage = JSON.parse(localStorage.getItem("userData")) || [];

function signUpValidation() {
  if (!regExp.name.test(userName.value)) {
    notValid.textContent = "Please Enter a Valid Name ";
    notValid.classList.replace("d-none", "d-block");
    return;
  }
  if (!regExp.email.test(userEmail.value)) {
    notValid.textContent = "Please Enter a Valid Email ";
    notValid.classList.replace("d-none", "d-block");
    return;
  }
  if (!regExp.pass.test(userpassword.value)) {
    notValid.textContent = "Please Enter a Valid Password ";
    notValid.classList.replace("d-none", "d-block");
    return;
  }
  for (var i = 0; i < dataStorage.length; i++) {
    if (dataStorage[i].email === userEmail.value){
      notValid.textContent = "User Already Existing";
    notValid.classList.replace("d-none", "d-block");
    return;
    }
  }

  var userData = {
    name: userName.value,
    email: userEmail.value,
    pass: userpassword.value,
  };
  isValid.textContent = "Account Created Successfully!";
  isValid.classList.replace("d-none", "d-block");
  notValid.classList.replace("d-block", "d-none");
  dataStorage.push(userData);
  localStorage.setItem("userData", JSON.stringify(dataStorage));
  clearInputs();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);
}
function clearInputs() {
  userName.value = "";
  userEmail.value = "";
  userpassword.value = "";
}
