let pro_detail= JSON.parse(localStorage.getItem('pro_detail'));
console.log(pro_detail)

let image= document.getElementById('image');
let details= document.getElementById('details');

let append=()=>{
let img= document.createElement('img');
let name= document.createElement('h1');
let type= document.createElement('h5');
let price= document.createElement('h3');

let pro_ex=document.createElement('div');

let hr= document.createElement('hr');

img.src=pro_detail.image;
name.innerText=pro_detail.name;
type.innerText=pro_detail.type;
price.innerText=`Now ${pro_detail.price}`;

// next part 2

let receive= document.createElement('p');
let input= document.createElement('input');
let input1=document.createElement('input');
let ship= document.createElement('h4');

let pick= document.createElement('h4');
let hr1= document.createElement('hr');
let hr5= document.createElement('hr')

let shipit=document.createElement('div');
let receiveDiv= document.createElement('div');
let pickup= document.createElement('div');
shipit.setAttribute("class", "ship")
pickup.setAttribute("class", "pick")

receive.innerText= "How do you want to receive it?";
input.type='radio'
input1.type='radio'
ship.innerText='Ship it Available'
pick.innerText="Pick Up in Store"
shipit.append(input,ship)
pickup.append(input1,pick)
receiveDiv.append(receive,shipit,pickup,hr1)
// next part3
let sub= document.createElement('button');
let sum= document.createElement('button');
let total= document.createElement('button');
let add= document.createElement('button');
let hr2= document.createElement('hr');
let bagdiv= document.createElement('div');

bagdiv.style.display='flex'

let c=0;
sub.innerText="-";
total.innerText=c;
sub.onclick=()=>{
   if(c>0){
       c--;
   }
    console.log(c)
    total.innerText=c;
}
sum.onclick=()=>{
    
        c++;
     console.log(c)
     total.innerText=c;
 }
sum.innerText="+";
add.innerText="ADD TO BAG";
add.setAttribute("class", "add")
add.addEventListener("click",function(){
    addtoaggg(pro_detail)
})
bagdiv.append(sub,total,sum,add)

// next part4

let hd1= document.createElement('p');
let hr3= document.createElement('hr');

let hd1div= document.createElement('div');

hd1.innerText="FRAGRANCE";

hd1div.append(hd1,hr3);

// //next part5
// let hd2= document.createElement('p');
// let hr4= document.createElement('hr');

// let hd2div= document.createElement('div');

// hd1.innerText="OVERVIEW";

// hd1div.append(hd2,hr4)

//NEXT PART6

let hd3= document.createElement('p');
let hr6= document.createElement('hr');

let hd3div= document.createElement('div');

hd3.innerText="OVERVIEW";

hd1div.append(hd3,hr6);

//next part7
let hd4= document.createElement('p');
let hr7= document.createElement('hr');

let hd4div= document.createElement('div');

hd4.innerText="USAGE";

hd1div.append(hd4,hr7)



pro_ex.append(name,type,price,hr)

image.append(img)
details.append(pro_ex,receiveDiv,bagdiv,hr2, hd1div)
}

append()




function addtoaggg(el){
    let arr=JSON.parse(localStorage.getItem("mycart"))||[]
    
    arr.push(el)
    
    localStorage.setItem("mycart",JSON.stringify(arr))
    alert("Your Product Added To bag Sucsessfully..")
    }