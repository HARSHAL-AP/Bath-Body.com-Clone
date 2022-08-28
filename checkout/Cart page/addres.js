let home=document.getElementById("gotohome")
home.addEventListener("click",function(){
    gotoh()
})
function gotoh(){
    window.location.href="/index.html"
}

let bag=document.getElementById("gotobag")
bag.addEventListener("click",function(){
    gotobag()
})
function gotobag(){
    window.location.href="/bag/bag.html"
}


let appendorder=()=>{
let data=JSON.parse(localStorage.getItem("mycart"))||[]
let contener=document.getElementById("contener")
let totalp=document.getElementById("totalamountdesc")
let s=0
for(let i=0;i<data.length;i++){
s+=+(data[i].price)
}
totalp.innerText="Total: "+"$  "+s
data.forEach((el)=>{
let box=document.createElement('div')

let imgd=document.createElement('div')
imgd.setAttribute("class","proimg")
let img=document.createElement('img')
img.src=el.image


imgd.append(img)
let datadiv=document.createElement('div')
datadiv.setAttribute("class","proo0odata")
let h4=document.createElement("h4")
h4.innerText=el.badge
let h5=document.createElement('h5')
h5.innerText=el.name
let type=document.createElement("p")
type.innerText=el.type 
let qty= document.createElement("h6")
qty.innerText=1
datadiv.append(h4,h5,type,qty)

let pp=document.createElement('div')
let amt=document.createElement("h6")
amt.innerText="$"+el.price

pp.append(amt)
box.append(imgd,datadiv,pp)
contener.append(box)
})



}
appendorder()


let pymentmode=document.getElementById("cjghpo09854")
pymentmode.addEventListener("click",function(){
    gotobill()
})

function gotobill(){



window.location.href="/checkout/Cart page/billing.html"

}