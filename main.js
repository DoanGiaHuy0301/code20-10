function rain() {
  let cloud = document.querySelector(".cloud");
  let e = document.createElement("div");

  e.classList.add("drop");
  cloud.appendChild(e);

  let left = Math.floor(Math.random() * 290);
  let size = Math.round() * 1.5;
  let duration = Math.random() * 1;

  e.innerText = "💚";
  e.style.left = left + "px";
  e.style.fontSize = 0.5 + size + "em";
  e.style.animationDirection = 1 + duration + "s";

  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}
function showForm(e) {
  event.preventDefault();

  let f = document.getElementById("form");
  let cloud = document.getElementById("cloud");
  let show = document.getElementById("showForm");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let bg = document.getElementById('body');
  let error = document.querySelector('.error');
  let ballLeft = document.querySelector('.left-ball');
  let ballBottom = document.querySelector('.bottom-ball');

  if (username.value.trim() == "tunhi" && password.value.trim() == "20102024") {
    show.style.display = "none";
    f.style.display = "none";
    ballLeft.style.display = "none";
    ballBottom.style.display = "none";
    cloud.style.display = "flex";
    bg.style.background = '#000';
  } else {
    username.value = '';
    password.value = '';
    error.innerHTML = "Nhập sai rồi cô nương!!!!";
  }
}

function show() {
  let show = document.getElementById("showForm");
  let f = document.getElementById("form");

  show.style.display = "none";
  f.style.display = "flex";
}

setInterval(function () {
  rain();
}, 20);
