//1
// var btn = document.querySelector("button");
// var para = document.querySelector("p");
// btn.addEventListener("click",function(){
//     para.style.color = "royalblue";
//     para.textContent = "hello I am rahul";
// })
//2
// var btn = document.querySelector("button");
// var img1 = document.querySelector(".img1");
// var img2 = document.querySelector(".img2");
// btn.addEventListener("click",function(){
//     var src1 = img1.src;
//     var src2 =img2.src;
//     img1.src = src2;
//     img2.src = src1;
 
// })
// var form = document.querySelector("form");
// var inps = document.querySelectorAll('input[type="text"]');
// var inp1 = document.querySelector(".inp1");
// var inp2 = document.querySelector(".inp2");
// var h2 = document.querySelector("h2");
// form.addEventListener("submit",function(e){
//    e.preventDefault();
//    if(inp1.value === "" || inp2.value === ""){
//     h2.textContent = "Error the some input";
//     h2.style.color = "red";
//    }else{
//     h2.textContent = "";

//    }
//    inps.forEach(function(el){
//     if(el.value ===""){
//         h2.textContent = "Error the some input";
//             h2.style.color = "red";
//     }else{
//         h2.textContent = "";

//     }
//    })
//     for(var i = 0;i<inps.length;i++){
//         if(inps[i].value.trim() ===""){
//                 h2.textContent = "Error the some input";
//                     h2.style.color = "red";
//                     break;
//         }else{
//             h2.textContent = "";

//         }
//     }
// });

// var ul = document.querySelector("ul");
// var inp = document.querySelector("input");
// var add = document.querySelector(".btn1");
// var remove = document.querySelector(".btn2");
// var li;

// add.addEventListener("click",function(){
//    if(inp.value.trim() === ''){}
//    else{
//     li = document.createElement("li");
//       li.textContent =inp.value;
//       ul.appendChild(li);
//       inp.value = "";
//    }
// });
// remove.addEventListener("click",function(){
//    ul.removeChild(li);
//  });

// var h3 = document.querySelector("h3");
// var btn1 = document.querySelector(".ST");
// var btn2 = document.querySelector(".SP");
// var count = 0;
// var int;
// btn1.addEventListener("click",function(){
//  int = setInterval(function(){
//     count++;
//     h3.textContent = count;
//   },990);
// });
// btn2.addEventListener("click",function(){
//     clearInterval(int);
// })
// var home = document.querySelector("#H");
// var about = document.querySelector("#A");
// var contact = document.querySelector("#C");

// var H1 = document.querySelector("#Hotext");
// var A1 = document.querySelector("#Abtext");
// var C1 = document.querySelector("#Cotext");


// home.addEventListener("click",function(){
//     saretexthatao();
//   H1.style.display = "block";
//   H1.style.width = "50%";
//   H1.style.color = "blue";
// })
// about.addEventListener("click",function(){
//     saretexthatao();

//   A1.style.display = "block";
//   A1.style.width = "50%";
//   A1.style.color = "green";

// })
// contact.addEventListener("click",function(){
//     saretexthatao();

//    C1.style.display = "block";
//   C1.style.width = "50%";
//   C1.style.color = "brown";
  
// })
// function saretexthatao(){
//     document.querySelectorAll("h3").forEach(function(h3){
//       h3.style.display = "none";
//     })
// }
// var divs = document.querySelectorAll(".tab");
// var texts = document.querySelectorAll("h3");
   
// texts[0].style.display = "block";
// texts[0].style.width = "50%";
// divs.forEach(function(D,index){
//     D.addEventListener("click",function(){
//      saretexthatao();
//      texts[index].style.display = "block";
//      texts[index].style.width = "50%"
//     });
// });
// function saretexthatao(){
//     texts.forEach(function(h3){
//     h3.style.display = "none";
//     })
// }
// var pro = document.querySelector(".progress-bar");
// var h1 = document.querySelector("h1");
// var count = 0;
// var int = setInterval(function(){
//     if(count === 100){
//       clearInterval(int);
//       h1.style.opacity = 1;
//     }
//         count++;
//         pro.style.width = count+'%';
// },100);
// var pepole = document.querySelector(".pepole");
// var data = [
//     {
//         name:"Mahakal",src:"/proj/project1/shiva.jpg"
//     },
//     {
//         name:"Mahavenashi",src:"/proj/project1/shiva.jpg"
//     },{
//         name:"Kridava",src:"/proj/project1/shiva.jpg"
//     },{
//         name:"Krikaldeshi",src:"/proj/project1/shiva.jpg"
//     },
// ]
// var pers = "";
// var inp = document.querySelector("input")

// data.forEach(function(e){
//    pers += `<div class="person">
//           <div class="img">
//             <img src="${e.src}" alt="">
//           </div>
//           <h2>${e.name}</h2>
//         </div>`;
// })
// pepole.innerHTML = pers;
// var matching;
// inp.addEventListener("input",function(){
//  matching = data.filter(function(elem){
//   return elem.name.startsWith(inp.value);
//   })
//   var newusers = "";
//   matching.forEach(function(e){
//     newusers += `<div class="person">
//            <div class="img">
//              <img src="${e.src}" alt="">
//            </div>
//            <h2>${e.name}</h2>
//          </div>`;
//  })
//  pepole.innerHTML = newusers;
// })
var count = document.querySelector(".counter");
var text = document.querySelector("textarea");
text.addEventListener("input",function(){
   count.textContent = text.value.length;
})