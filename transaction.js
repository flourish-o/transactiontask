function displayContent(section2) {
  console.log("success");
  var menus = document.getElementsByClassName("show-body");
  for (var i = 0; i < menus.length; i++) {
    menus[i].style.display = "none";
  }
  document.getElementById(section2).style.display = "flex";
}
document;

const myForm = document.getElementById("login-form");
const mainPage = document.getElementById("main-page");
const loginPage = document.getElementById("login-page");
const inputBar = document.getElementById("user-id");
const errorText = document.getElementById("error-text");
myForm.addEventListener("submit", logIn);
function logIn(e) {
  e.preventDefault();
  setTimeout(function () {
    const loginText = inputBar.value.trim();
    const userID = loginText.toLowerCase();
    if (userID == "lott888@gmail.com") {
      mainPage.style.display = "flex";
      loginPage.style.display = "none";
    } else if (userID == "") {
      errorText.style.display = "flex";
      errorText.placeholder = "Please enter UserID";
    } else {
      errorText.placeholder = "Wrong UserID";
      errorText.style.display = "flex";
    }
  }, 800);
}

const logOut = document.getElementById("logout-button");
logOut.addEventListener("click", log_out);
function log_out(e) {
  setTimeout(function () {
    loginPage.style.display = "flex";
    mainPage.style.display = "none";
  }, 800);
}
