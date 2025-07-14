const loginTap = document.getElementById("loginTap");
const registerTap = document.getElementById("registerTap");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginTap.addEventListener("click", () => {
	loginTap.classList.add("active");
	registerTap.classList.remove("active");
	loginForm.classList.add("active");
	registerForm.classList.remove("active");
});

registerTap.addEventListener("click", () => {
	registerTap.classList.add("active");
	loginTap.classList.remove("active");
	registerForm.classList.add("active");
	loginForm.classList.remove("active");
});

function myFunction() {
  alert("Login successful");
}

function myRegister() {
  alert("Your accout have been created successfully");
}