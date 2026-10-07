const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutButton = document.querySelector("#logout-button");
const todoArea = document.querySelector("#todo-area");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 처리
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreetingScreen(username);
}

// 인사말 표시
function showGreetingScreen(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutButton.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoArea.classList.remove(HIDDEN_CLASSNAME);
}

// 로그아웃 처리
function onLogoutClick() {
  localStorage.removeItem(USERNAME_KEY);
  showLoginForm();
}

// 로그인 화면 표시
function showLoginForm() {
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutButton.classList.add(HIDDEN_CLASSNAME);
  todoArea.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
  loginInput.focus();
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutButton.addEventListener("click", onLogoutClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  showLoginForm();
} else {
  showGreetingScreen(savedUsername);
}
