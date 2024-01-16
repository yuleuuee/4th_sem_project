///*********** Bulb ***************///
let click = document.getElementById("day");
let body = document.querySelector("body");
let bulb = document.querySelector("#day>i");
click.addEventListener("click", change);
function change() {
  if (body.className == "black") {
    body.className = "white";
    click.style.borderColor = "black";
    bulb.style.color = "black";
    bulb.style.textShadow = "none";
  } else if (body.className == "white") {
    body.className = "black";
    click.style.borderColor = "white";
    bulb.style.color = "orange";
    bulb.style.textShadow = "2px 2px 3px black,-1px -1px 3px black";
  }
}


///*********** Sound part ***************///

const audio1 = new Audio();
audio1.src = "./audios/click.mp3";

// function play() {
//   var audio = new Audio("./audios/love.mp3");
//   audio.play();
// }

const audio = new Audio( "./audios/love.mp3");
// audio.src = "./audios/love.mp3";


///*********** like part ***************///


let heart = document.querySelectorAll(".fa-heart"); //taking all .fa-heart class
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", fun2);
  
  function fun2() {
    heart[i].style.color = "red";
    heart[i].style.textShadow="2px 2px 3px black";
    heart[i].style.fontSize = 1.8 + "em";
    setTimeout(function () {
      heart[i].style.fontSize = 1.6 + "em";
    }, 200);

    switch (i) {
      case 0:
        var el0 = document.getElementById("like_num0");
        var value0 = el0.innerHTML;
        ++value0;
        document.getElementById("like_num0").innerHTML = value0;
        break;

      case 1:
        var el1 = document.getElementById("like_num1");
        var value1 = el1.innerHTML;
        ++value1;
        document.getElementById("like_num1").innerHTML = value1;
        break;
      case 2:
        var el2 = document.getElementById("like_num2");
        var value2 = el2.innerHTML;
        ++value2;
        document.getElementById("like_num2").innerHTML = value2;
        break;
      case 3:
        var el3 = document.getElementById("like_num3");
        var value3 = el3.innerHTML;
        ++value3;
        document.getElementById("like_num3").innerHTML = value3;
        break;
    }
  }
}


///*********** comment part ***************///

let cmt = document.querySelector(".fa-comment-dots");
let sml_box = document.querySelector("#sml_box");
cmt.addEventListener("click", fun3);
function fun3() {
  cmt.style.color = "hsl(237, 77%, 84%)";
  cmt.style.textShadow = "2px 2px 3px black";
  sml_box.innerHTML =
    '<input type="text" placeholder="Write a Comment..." maxlength="50"><span id ="spanin">Post</span>';

  let input = document.querySelector("input");
  let btn = document.querySelector("#spanin");
  let cmt_box = document.querySelector(".cmt_box");
  const names = ["送治远", "许亦心", "李泽涛", "李思远", "杨欣沛", "杨书凯"];
  btn.addEventListener("click", () => {
    var nam = names[Math.floor(Math.random() * names.length)];
    const newEl = document.createElement("li");
    const newText = document.createTextNode(nam + " : " + input.value);
    newEl.appendChild(newText);
    cmt_box.appendChild(newEl);
    cmt.addEventListener("click", function () {
      cmt_box.innerHTML ="";
    });
  });
  cmt_box.addEventListener('click',(e)=>{
    e.target.remove();
  });
}

/********** share button ******* */

let shr = document.querySelector(".fa-share");

shr.addEventListener("click", function () {
  shr.style.color = "hsl(237, 77%, 84%)";
  shr.style.textShadow = "2px 2px 3px black";
  sml_box.innerHTML = "";
  cmt.style.color = "";
  cmt.style.textShadow = "none";
  cmt.addEventListener("click", function () {
    shr.style.color = "grey";
    shr.style.textShadow = "none";
  });
});


/********** Scroll up ******* */

let day = document.querySelector('#stop');
let goTop= document.querySelector('#goTop');
goTop.addEventListener('click', () => scrollup()); 

function scrollup() {
        day.scrollIntoView(
          {
            block:'center', 
            behavior:'smooth'
          }
        );
};

/***************** Read More  *****************/

const expand= '<a class="expand">...展开</a>';
      const collapse='<a class="collapse">收起</a>'
      
      const data= [
    {
      s_text: 'Does anyone know where I can find more vacation days?😁 #summer',
      l_text: 'Does anyone know where I can find more vacation days?😁 #summer'+
              '<br>有谁知道我在哪里可以找到更多的假期 ? '+
              '<br>我喜欢在太阳升起之前的夏日早晨散步，因为它带来凉爽、平静和快乐的感觉，空气清新。'+
              '日落前的傍晚散步也给人耳目一新的感觉。'
    },
    {
    s_text:
      "冬天，顾名思义，是一年中最冷的季节。秋天将季节从夏天",
    l_text:
      "冬天，顾名思义，是一年中最冷的季节。这是所有四个季节中的一个重要季节。冬季持续时间为 3-4 个月。它从 11 月开始,到2月底或3月初结束。冬季在12月和1月达到高峰。人们在冬季穿毛衣。冬天白天变短,夜晚变长。全国山区的冬季伴随着降雪。因此,人们喜欢在这些地区度假,享受冬季的美景。",
    },
    {
      s_text:
        " 秋季是一年中四大季节之一。秋天将季节从夏天变为冬天，因为",
      l_text:
        " 秋季是一年中四大季节之一。秋天将季节从夏天变为冬天，因为它介于它们之间。秋天在地球的不同部分在不同的时间落下。秋天也被称为“秋天”，因为树上的叶子在秋天开始落下。由于缺少雨水，叶子开始干枯，然后它们掉落，新叶在冬天长出来。在秋天，一切都从绿色变成黄色。树和草变成黄色，落叶覆盖了地球的表面。秋天有它独特的美。动物们在这个季节开始为冬天做准备。像杜鹃这样的鸟类迁徙到温暖的地方。",
    },
    {
      s_text:
        "春天是最喜欢的季节之一。我非常喜欢这个季节。这背后有",
      l_text:
        "春天是最喜欢的季节之一。我非常喜欢这个季节。这背后有很多原因。春天来了冬天之后。冬天充满了寒冷、冰冷和无聊的时光。人们享受春天的季节。由于自然美景，大多数诗人都喜欢这个季节。有人说“春天是四季中的女王”。我完全同意他们的看法。整个大自然变得清新，树上长满了新的花叶。当你穿过花园时，你会感觉像天堂一样。",
    },
    
  ];

  // 0

  const content0 = document.querySelector('.content0');
  ((e) => {
    if (data[0].l_text.length>50) {
       content0.innerHTML=data[0].s_text+expand;
    } else {
      content0.textContent=data[0].l_text;
    }
  })(content0);

  content0.addEventListener('click', (e)=> {
    // console.log(e.target);
    if(e.target.className =='expand'){
      content0.innerHTML = data[0].l_text+collapse;
    } else if(e.target.className =='collapse'){
      content0.innerHTML=data[0].s_text+expand;
    }
    });
    


// 1
    const content1= document.querySelector('.content1');
    ((e) => {
    if (data[1].l_text.length>50) {
       content1.innerHTML=data[1].s_text+expand;
    } else {
      content1.textContent=data[1].l_text;
    }
  })(content1);

  content1.addEventListener('click', (e)=> {
    if(e.target.className =='expand'){
      content1.innerHTML = data[1].l_text+collapse;
    } else if(e.target.className =='collapse'){
      content1.innerHTML=data[1].s_text+expand;
    }
    });


// 2
    const content2= document.querySelector('.content2');
    ((e) => {
    if (data[2].l_text.length>50) {
       content2.innerHTML=data[2].s_text+expand;
    } else {
      content2.textContent=data[2].l_text;
    }
  })(content2);

  content2.addEventListener('click', (e)=> {
    if(e.target.className =='expand'){
      content2.innerHTML = data[2].l_text+collapse;
    } else if(e.target.className =='collapse'){
      content2.innerHTML=data[2].s_text+expand;
    }
    });


// 3
    const content3= document.querySelector('.content3');
    ((e) => {
    if (data[3].l_text.length>50) {
       content3.innerHTML=data[3].s_text+expand;
    } else {
      content3.textContent=data[3].l_text;
    }
  })(content3);

  content3.addEventListener('click', (e)=> {
    if(e.target.className =='expand'){
      content3.innerHTML = data[3].l_text+collapse;
    } else if(e.target.className =='collapse'){
      content3.innerHTML=data[3].s_text+expand;
    }
    });


/**********************************************************/





