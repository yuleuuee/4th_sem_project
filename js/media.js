
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


//************* tiktok logo big and small ***********/

let logo=document.querySelector('.tik_logo>i');
setInterval(() => {
  logo.style.fontSize='3.4em';
  setTimeout(() => {
    logo.style.fontSize='3em';
  },100);
},400); //in every 400 毫秒 haomiao inside code will run


/*********************** Advertisement  Part **********************/


//1st ads
let adv1=document.getElementById('adv1');
let h2=document.querySelector('.div01>h2');
var t=6;
//setInterval part
(function () {
 let intVal = setInterval(()=>{
   h2.innerHTML=`广告将在 <b>${t-1}</b> 秒后出现`;
   --t;
   if(t==0){      
       clearInterval(intVal);   //clearing the time after it becomes 0 
       h2.innerHTML='<i class="fa-solid fa-hand-point-down"></i>点击访问网站 <i class="fa-solid fa-hand-point-down"></i>';
       adv1.innerHTML='<i class="fa-solid fa-delete-left firstCrs"></i><img src="/images/add03.gif" alt="Math_Add" />';
        document.querySelector('#adv1>img').addEventListener('click',function (){
          location.href='https://onlinegame.travian.com.au/';
        });
      };
 },1000)
})();


//2nd ads
let adv2=document.getElementById('adv2');
//setTimeout Part
// after given time (inside code will run)
setTimeout(() => {
     adv2.innerHTML='<i class="fa-solid fa-delete-left  secondCrs"></i><img src="/images/add02.gif" alt="shoes_Add" />';
    
     let adv2_img=document.querySelector('#adv2>img');

         adv2_img.addEventListener('mouseover',()=>{
           adv2_img.style.opacity='1';
         });
         adv2_img.addEventListener('mouseout',()=>{
           adv2_img.style.opacity='0.6';
         });
         // cross becomes red then only function inside it works
         setTimeout(() => {
           let cross1=document.querySelector('.firstCrs');
           let cross2=document.querySelector('.secondCrs');
           cross1.style.color='brown';
           cross2.style.color='brown';
           cross2.addEventListener('click',()=>{
           adv2.innerHTML='广告没了';
           adv2.style.fontSize='7em';
           adv2.style.textAlign='center';
   
           });   
         }, 5000);
             
},6000);



 /*****************  Fly comments **********************/ 

 let flyComments =document.querySelector('#flyComments')
 let input=document.querySelector("input");
 document.addEventListener('keydown',(e)=>{ //works after pressing other key at last
   if(e.keyCode == 13){ //keyCode = 13 is enter key
     const newEl = document.createElement("li"); 
     const newText = document.createTextNode(input.value);
     newEl.appendChild(newText);
     flyComments.appendChild(newEl);
     document.querySelector("input").value='';
     setTimeout(() => {
       flyComments.removeChild(flyComments.firstElementChild);
     }, 3000);
   }
 })


/*********************** Emojie fly up **********************/

const btn = document.querySelector(".like_up");

btn.addEventListener("click", function (e) {
 let topPart = this.getBoundingClientRect().top;
 let leftPart = this.getBoundingClientRect().left;
 createTip(e, leftPart,topPart);
});

let valuesIndex = -1; 
function createTip(e, p, q) {
 const values = ["👍", "😍", "😘", "🤗", "👌", "❤️"];
 valuesIndex = (valuesIndex + 1) % values.length;
 const tip = document.createElement("span");
 tip.textContent = values[valuesIndex];
 document.body.appendChild(tip);
 q = q - tip.offsetHeight;
 p = p + (e.target.offsetWidth - tip.offsetWidth) / 2;
 tip.style.top = q + "px";
 tip.style.left = p + "px";
 tip.className = "tip";
 setTimeout(() => tip.remove(), 2000);
}


/*********************** full screen **********************/

const img = document.querySelector(".div03>section>img");
  document.addEventListener( "keydown",(e) => {
      if (e.keyCode == 90 && e.shiftKey) { //keycode of z or Z both and 
        fullScr(img);
      }
    },
    false
   );
   function fullScr(element) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
   }
   

/*********************** Printing Part **********************/

document.querySelector('#print').addEventListener('click', () => {
  var bod = document.querySelector('body').innerHTML;  //all content of body(its innerHtmal)  is stored in "bod"
  var data = document.querySelector('#printArea').innerHTML; //getting the area to print , and storing its innerHtmal in "data"
  document.querySelector('body').innerHTML=data; //actual body'S innerHtml will "data"
  var hh1= document.querySelector('body>h2');
  var img= document.querySelector('body>img');
  hh1.innerHTML='';
  img.style='width:100%;';
  window.print();
  window.location.reload(); //directly refreshing the page after print function
});

/*********************** Checkbox Part **********************/

function checkUncheck(){
  let box = document.getElementsByName('box');
  for(var a=0;a<box.length;a++){

   if(box[0].checked==true){
    box[a].checked=true;
   }else{
    box[a].checked=false;
   }
  };

};  



     









