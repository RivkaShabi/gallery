 import {arr}  from './Json.js';   

var btn;
let close,card;
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01"); 
var br;
creat();
function creat(){        
   card = document.getElementById('card');
  for (let i = 0; i <arr.length; i++) {
    close = document.createElement("img");
    close.src ="https://www.emojiall.com/images/240/apple/274c.png";
     console.log(close);
    close.className = "closure";
    btn = document.createElement("img");
    btn.src =arr[i].thumbnailUrl;
    btn.className = "responsive";  
    if(i%3==0&&i!=0){
      br = document.createElement("br");
      card.appendChild(br);
    }
     card.appendChild(close);
    card.appendChild(btn); 
   
    btn.setAttribute("id", arr[i].id);
    close.setAttribute("id", arr[i].id);
    /////
    btn.onclick=function(){
        modal.style.display = "block";
        modalImg.src = arr[i].url;
      } 
      close.onclick=function(){
        while (card.firstChild) {
          card.removeChild(card.lastChild);
        }
         arr.splice(i,1);
         creat();
      } }
    }


    // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}



