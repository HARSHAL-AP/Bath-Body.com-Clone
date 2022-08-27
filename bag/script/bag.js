function emptybag(){
  let cart=JSON.parse(localStorage.getItem("mycart"))||[]
  if(cart.length===0){
    document.getElementById("shoping").innerHTML=`<div id="emptybag">
    <p>Your Shopping Bag is Empty</p>
    <hr>
    <button><a href="/index.html">CONTINUE SHOPPING</a></button>
</div>`
}
else{
  document.getElementById("shoping").innerHTML=`<div id="shopibbagmainbody">
  <div id="pymentnfo">
    <p>ITEMS IN SHOPPING BAG</p>
    <div>
      <button class="paypal">
        <img
          src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png"
          alt=""
        /></button
      ><button class="checkoutbtn">
        <span class="material-symbols-outlined"> lock </span>CHECKOUT
      </button>
    </div>
  </div>
  <div>
    <div id="pickupstroadd">
      <p>
        Need it ASAP? Choose Pick Up In Store, and we'll typically have it
        ready for pickup within 4 hours.
      </p>
    </div>
    <div id="bagitemheadings">
      <div id="bagtitle1">
        <p>ITEM</p>
        <p>ITEM PRICE</p>
      </div>
      <div id="bagtitle2">
        <p>QTY</p>
        <p>TOTAL PRICE</p>
      </div>
    </div>

    <div id="minbagproductdiv">
         
    </div>
    
  </div>
</div>`
}
}
emptybag()




let apendacart=()=>{
let data=JSON.parse(localStorage.getItem("mycart"))||[]
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
clearbtn.addEventListener("click",function(){
  removeproduct(el,index)
})
qty2.append(totalcost,clearbtn)


decin.append(qty,qty2)
descdiv.append(decin)
divv.append(imgdiv,descdiv)
position.append(divv)
})




}
apendacart()




function  removeproduct(el,index){

  let cart=JSON.parse(localStorage.getItem("mycart"))||[]

  let newarr=cart.filter(function(el,i){
      return i!==index
      emptybag()
      apendacart()
  })
  localStorage.setItem("mycart",JSON.stringify(newarr))
  window.location.reload()




}