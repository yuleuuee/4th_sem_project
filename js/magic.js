
/*************** Color Change **************/

function myFunction() {
  var z = document.getElementById("user_name");
  z.value = z.value.toUpperCase();
}

function fun1() {
  var id = document.getElementById("user_name").value;
  var pass = document.getElementById("pass_word").value;
  if (id == "YULE" && pass == "622718") {
    document.getElementById("pass_word").value='';
    color_change.innerHTML =
      '<label for="test1">请输入颜色名</label><input type="textarea"  name="text1" autocomplete="off"><br>';
    let x = document.querySelector('input[type="textarea"]');
    x.focus();
    let y = document.querySelector("body");
    x.addEventListener("keyup", fun);
    function fun() {
      y.style.backgroundColor = x.value;
    }
  } else { 
    let body=document.body;
    alertBox.style. visibility= 'visible';
    body.style.backgroundColor=' hsla(195, 0%, 68%, 1) ';
    let Xmark =document.querySelector('.fa-xmark');
    Xmark.addEventListener('click', () => {
      alertBox.style. visibility= 'hidden';
      body.style.backgroundColor='white';
    })
    document.getElementById("pass_word").value='';
  }
}


/************** Alert box ********************/

let y=window.innerHeight /2;
let x=window.innerWidth /2;

// console.log("W-Height/2: "+ y);
// console.log("W-Widtht/2: "+ x);

let alertBox=document.querySelector('#alertBox');

let cH=alertBox.clientHeight/2
let cW=alertBox.clientWidth/2

// console.log("C-Height/2: "+ cH);
// console.log("C-Widtht/2: "+ cW);

alertBox.style.top =y-cH+'px';
alertBox.style.left =x-cW+'px';


/************** hide and see ********************/

function fun3() {
  let mima = document.getElementById("mimaid");
  mima.innerHTML = "<p>用户名: YULE |  密码: 622718</p>";
  if (mima.className == "mima1") {
    setTimeout(function () {
      mima.innerHTML = "";
      mima.className = "mima2";
    }, 2000);
  } else if (mima.className == "mima2") {
    setTimeout(function () {
      mima.innerHTML = "";
      mima.className = "mima1";
    }, 2000);
  }
}

/************** EYE Part ****************/

const pas = document.querySelector("[type=password]");
const eye = document.querySelector(".eye");

pas.addEventListener("focus", (e) => {
  //eye.style.border="1px dotted black";
  eye.style.boxShadow = "2px 4px 14px 4px rgb(112 114 124 / 20%)";
  if (e.target.type == "password") {
    eye.src = "./images/eye-close.png";
  } else {
    eye.src = "./images/eye-open.png";
  }
});

eye.addEventListener("click", (e) => {
  if (pas.type == "password") {
    pas.type = "text";
    e.target.src = "./images/eye-open.png";
  } else {
    pas.type = "password";
    e.target.src = "./images/eye-close.png";
  }
});

/************** Vallidation Part ****************/

const feedback = document.querySelector("#message1");
const username = document.querySelector("[name=user_name]");

username.addEventListener("blur", function () {
  checkUsername(4);
});

function checkUsername(minL) {
  if (username.value.length > 0 && username.value.length < 4) {
    feedback.innerHTML =
      '<i class="fa-solid fa-triangle-exclamation exc"></i>用户名不能少于' + minL + '个字符 <i class="fa-solid fa-triangle-exclamation exc"></i>';
    username.focus();
  } else if (username.value.length == 0) {
    feedback.innerHTML ='<i class="fa-solid fa-triangle-exclamation exc"></i> 用户名不能为空 <i class="fa-solid fa-triangle-exclamation exc"></i>';
    username.focus();
  } else {
    password.focus();
  }
}

function remove1() {
  feedback.innerHTML = "";
}




