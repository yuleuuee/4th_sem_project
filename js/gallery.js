//************** Slider part *****************/

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideshadows: true,
    shadowoffset: 40,
    shadowScale: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///*********** Sound part ***************///

const audio1 = new Audio();
audio1.src = "./audios/click.mp3";

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

///*********** pI Chart part ***************///

var chartDom = document.getElementById("inDiv1");
var myChart = echarts.init(chartDom);
var option;

option = {
  legend: {
    top: "bottom",
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [50, 250],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 60,
      },
      data: [
        { value: 40, name: "Wechat" },
        { value: 38, name: "QQ" },
        { value: 32, name: "YouTube" },
        { value: 30, name: "Twitter" },
        { value: 28, name: "Instagram" },
        { value: 26, name: "TikTok" },
        { value: 22, name: "Pinterest" },
        { value: 13, name: "Snapchat" },
        { value: 8, name: "Facebook" },
      ],
    },
  ],
};

option && myChart.setOption(option);


/******************* Time part *************************/


const dateEl= document.querySelector('.date');
const timeEl= document.querySelector('.time');
const secondsEl= document.querySelector('.seconds');

function getTime(){
fetch('http://quan.suning.com/getSysTime.do' + '?rnd=' + Date.now())
.then(response => response.json())
.then(data => {
showDate(data.sysTime2);
// console.log(data.sysTime2);
showTime(data.sysTime2);
});
}

getTime();

function showDate(sysDate){
let tempDate = new Date(sysDate);
let year = tempDate.getFullYear();
let month = tempDate.getMonth() + 1 ;
let date = tempDate.getDate();
let weekday = tempDate.getDay();
const week = ['日','一','二','三','四','五','六'];
let tab=`
<table>
<tr>
  <td>${year}年</td>
  <td>${month}月</td>
  <td>${date}日</td>
</tr>
<tr>
  <td colspan ="3">
  星期${week[weekday]}
  </td>
</tr>
</table>
`;

dateEl.innerHTML= tab;
}

function showTime(sysDate){
let tempDate = new Date(sysDate);
let hours = getDoubleDigit(tempDate.getHours());
let minutes = getDoubleDigit(tempDate.getMinutes());
let seconds = getDoubleDigit(tempDate.getSeconds());
timeEl.innerHTML= `<span>${hours}</span>:<span>${minutes}</span>:<span class="seconds">${seconds}</span>`;

}

setInterval(addSeconds, 1000); // 1 sec = 1000 milisec

function addSeconds() {
    const secondsEl= document.querySelector('.seconds');
    if (secondsEl.textContent == '') return;
    let curSeconds = Number(secondsEl.textContent)+1;
    if(curSeconds == 60) {
    getTime();   // on each 60 sec it will request time 
    } else {
    secondsEl.textContent= getDoubleDigit(curSeconds);
    }
}

function getDoubleDigit(time){
return time < 10 ? '0' + time : time;
}


/******************* GetHub Users part *************************/

document.getElementById('btn').addEventListener('click',loadUsers);

function loadUsers(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://api.github.com/users',true);
  xhr.onload = function(){
    if(this.status==200){
      var users =JSON.parse(this.responseText)
      var output='';
      for (var i=0 ;i<6 ;i++){
        output+='<div class="user">'+
                  '<img src="'+users[i].avatar_url+'" width="70" height="70">'+
                  '<ul>'+'<li>ID:'+users[i].id+'</li>'+
                    '<li>Login: '+users[i].login+'</li>' +
                  '<ul>'+
                '</div>';
      }
      document.getElementById('users').innerHTML=output;
    }
  }
  xhr.send();
};

