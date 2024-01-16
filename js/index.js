let body = document.querySelector("body");
let click = document.getElementById("sun-moon");

click.addEventListener("click", change);

const audio1 = new Audio();
audio1.src = "./audios/click.mp3";

function change() {
  if (body.className == "day") {
    body.className = "ev";
    click.innerHTML = '<i class="fa-solid fa-cloud-moon"></i>';
  } else if (body.className == "ev") {
    body.className = "night";
    click.innerHTML = '<i class="fa-solid fa-sun" style=" color:orange"></i>';
  } else {
    body.className = "day";
    click.innerHTML =
      '<i class="fa-solid fa-cloud-sun" style=" color:grey"></i>';
  }
}
