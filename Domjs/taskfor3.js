// var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// var inps = document.querySelectorAll("input[type = 'text']");
// var h1 = document.querySelector("h1");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     //1st way
//     // if(inp1.value === ''||inp2.value === ''){
//     //    h1.textContent = "Error The Inputs";
//     //    h1.style.color = "red";
//     // }else{
//     //    h1.textContent = "";

//     // }

//     //2nd way foreach
//     // inps.forEach((ele)=>{
//     //  if(ele.value.trim() === ''){
//     //     h1.textContent = "Error";
//     //     h1.style.color = "red";
//     //  }else{
//     //     h1.textContent = "";
//     //  }
//     // })

//     //3way for loop
//     // for(var i = 0;i<inps.length;i++){
//     //     if(inps[i].value.trim()=== ''){
//     //           h1.textContent = "Error";
//     //          h1.style.color = "red";
//     //        break;
//     //  }else{
//     //     h1.textContent = "";
//     //  }
        
//     // }
// })

//3
// var ul = document.querySelector("ul");
// var inp = document.querySelector("input");
// var add = document.getElementById("A");
// var remove = document.getElementById("B");
// var li;
// add.addEventListener("click",()=>{
//     if(inp.value.trim()=== ""){}
//     else{
//         li = document.createElement("li");
//         li.textContent = inp.value;
//         ul.appendChild(li);
//         // li.onclick = ()=>{
//         //     ul.removeChild(li);
//         // }
//         inp.value = "";
    
//     }
// })

 //remove.addEventListener("click",()=>{
//     if(ul.children.length === 0){
//         return;
//     }
//     ul.removeChild(ul.children[ul.children.length-1]);
      //   const item = ul.children;
      //   if(item.length == 0){
      //    return;
      //   }
      //   ul.removeChild(item[item.length-1]);
// });
  
//4
// var start = document.querySelector("#btn");
// var stop = document.querySelector("#btn2");

// var h3 = document.querySelector("h3");
// var int ;
// start.addEventListener("click",()=>{
//    var c = 0;
//  int = setInterval(() => {
//     h3.textContent = c;
//     c++;
//    }, 1000);
// })
// stop.addEventListener("click",()=>{
//     clearInterval(int);
// })

//5
//1st way
// var Home = document.querySelector("#H");
// var About = document.querySelector("#A");
// var Contact = document.querySelector("#C");

// var text1 = document.querySelector("#Home");
// var text2 = document.querySelector("#About");
// var text3 = document.querySelector("#Contact");

// var alltext = document.querySelectorAll("h3");
 
// text1.style.display = "block";
// text1.style.width = "50%";
// text1.style.color = "royalblue"
// Home.addEventListener("click",()=>{
//    saarehatao();
//    text1.style.display = "block";
//    text1.style.width = "50%";
//    text1.style.color = "royalblue";
// })
// About.addEventListener("click",()=>{
//    saarehatao();
//    text2.style.display = "block";
//    text2.style.width = "50%";
//    text2.style.color = "red";
    
// })
// Contact.addEventListener("click",()=>{
//    saarehatao();
//    text3.style.display = "block";
//    text3.style.width = "50%";
//    text3.style.color = "yellow";

// })

// function saarehatao(){
//    alltext.forEach((e)=>{
//      e.style.display = "none";
//    })
// }

//2nd way
// var divs = document.querySelectorAll('.tab');
// var texts = document.querySelectorAll('h3');
// texts[0].style.display = "block";
// texts[0].style.width = "50%";
// // text[0].style.color = "red";
// // text[1].style.color = "blue";
// // text[2].style.color = "green";
// divs.forEach(function (div,indx){
//      div.addEventListener('click',function(){
//       hidealltext();
//       texts[indx].style.display = "block";
//       texts[indx].style.width = "50%";
//      })
// });
// function hidealltext(){
//       texts.forEach(function (text){
//             text.style.display = "none";
//       })
// }

//6
// let currentIndex = 0;
// const images = document.querySelector('.images');
// const totalImages = document.querySelectorAll('.images img').length;

// document.querySelector("#but1").addEventListener('click', () => {
//   currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
//   updateSlider();
// });

// document.querySelector("#but2").addEventListener('click', () => {
//   currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
//   updateSlider();
// });

// function updateSlider() {
//   const offset = -currentIndex * 100; // Move based on the current index
//   images.style.transform = `translateX(${offset}%)`;
// }

//7
var progress = document.querySelector(".progress");
var h1 = document.querySelector("h1");
var count = 0;
 var pro = setInterval(() => {
      if(count === 100){
            h1.style.opacity = 1;
       clearInterval(pro);
      }
      count++;
     progress.style.width = count+"%";
}, 300);
