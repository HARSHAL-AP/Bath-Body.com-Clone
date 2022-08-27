


let cart=[{
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd6ef9cca/crop/026538274_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
    badge: "New Fragrance",
    name: "Leather & Brandy",
    type: "3-Wick Candle",
    price: 16.5,
    Rating: 7,
  },
  {
    image:
      "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ca41ca6/crop/026495998_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      badge: "New Fragrance",
      name: "Coffee & Whiskey",
      type: "3-in-1 Hair & Body Wash",
      price: 13.5,
    Rating: 8,
  }]

let apendacart=(data)=>{
let position=document.getElementById("minbagproductdiv")
data.forEach((el,index)=>{

let divv=document.createElement('div')
let imgdiv=document.createElement('div')
imgdiv.setAttribute("class","cart_prodimg")
let imgbody=document.createElement('div')
imgbody.setAttribute("class","myinagi112")
let image=document.createElement("img")
image.src=el.image
imgbody.append(image)
let datadiv=document.createElement('div')
datadiv.setAttribute("class","mydata15554")
let namedata=document.createElement('div')
namedata.setAttribute("class","namedata12")
let h4=document.createElement("h4")
h4.innerText=el.badge
let h5=document.createElement('h5')
h5.innerText=el.name
let type=document.createElement("p")
type.innerText=el.type  
let p=document.createElement("h6")
p.innerText="Add To My LoveList"
namedata.append(h4,h5,type,p)
let pricedata=document.createElement('div')
pricedata.setAttribute("class","pricedata12")
let h2=document.createElement("h2")
h2.innerText="$"+el.price

pricedata.append(h2)

datadiv.append(namedata,pricedata)
imgdiv.append(imgbody,datadiv)
let descdiv=document.createElement('div')
descdiv.setAttribute("class","cart_proditempriceinfo")
let decin=document.createElement("div")
decin.setAttribute("class","mypordesc8765")

let qty=document.createElement("div")
qty.setAttribute("class","qtyjiop")
let btsub=document.createElement("button")
btsub.innerText="-"

let qtydivvv=document.createElement("input")
qtydivvv.value=1
let btadd=document.createElement("button")
btadd.innerText="+"


qty.append(btsub,qtydivvv,btadd)
let qty2=document.createElement("div")
qty2.setAttribute("class","alltotalamount")
let totalcost=document.createElement("p")
totalcost.innerText="$"+qtydivvv.value*el.price
let clearbtn=document.createElement("button")
clearbtn.innerHTML=`<span class="material-symbols-outlined">
close
</span>`
clearbtn.setAttribute("class","clearrpoductfromdata")
qty2.append(totalcost,clearbtn)


decin.append(qty,qty2)
descdiv.append(decin)
divv.append(imgdiv,descdiv)
position.append(divv)
})




}
apendacart(cart)


if(cart.length===0){
    document.getElementById("shoping").innerHTML=`<div id="emptybag">
    <p>Your Shopping Bag is Empty</p>
    <hr>
    <button><a href="/index.html">CONTINUE SHOPPING</a></button>
</div>`
}