import {navbody,foot} from "/components/nav.js"

let nav=document.getElementById("navbar")
nav.innerHTML=navbody()

let fott=document.getElementById("fotter")
fott.innerHTML=foot()
 let homapage=document.getElementById("mainlogo")
 homapage.addEventListener("click",function(){
    gotohome()
 })
 function gotohome(){
    window.location.href="/index.html"
 }

 let gotocart=document.getElementById('gotocart')
gotocart.addEventListener("click",function(){
  gotobag()
})
function gotobag(){
  window.location.href="/bag/bag.html"
}
