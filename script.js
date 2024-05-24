const btmEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const copyEl = document.getElementById("copyicon");
const alertEl = document.querySelector(".copypassword");

const character =
  "0123456789abcdefghijklmnopqrstuvwxyz@#$%&^[]{}.,?/ABSDEFGHIJKLMNOPQRSTUVWXYZ";

btmEl.addEventListener("click", () => {
  GenratePassword();
});

copyEl.addEventListener("click", () => {
  CopyPassword();

  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 1000);
  }
});

function GenratePassword() {
  var password = "";

  for (let i = 0; i < 14; i++) {
    const rand = Math.floor(Math.random() * character.length);
    password += character.substring(rand, rand + 1);
  }

  inputEl.value = password;
  alertEl.innerHTML = password + " " + "coppied";
}

function CopyPassword() {
  //this select text fo computer
  inputEl.select();
  // this select text to Mobile
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
