
// filter checkboxes function

var expanded= false;
let showCheckbox= ()=>{
    let checkboxes= document.getElementById('checkboxes');
    if(!expanded){
        checkboxes.style.display='block';
        expanded=true;
    }
    else{
        checkboxes.style.display='none';
        expanded=false;
    }
}


class products{
    constructor(i,b,n,t,p){
        this.image=i
        this.badge=b
        this.name=n
        this.type=t
        this.price=p
    }
}
let products_arr=[];
const body_products= new products ('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwac08f6f3/crop/026556957_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Sweater Weather','Single Wick Candle','$15.50');
const body_products1= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwda7ace5f/crop/026553508_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Leaves','Single Wick Candle','$15.50');
const body_products2= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw408b4ce5/crop/026539011_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Pumpkin Pecan Waffles','Single Wick Candle','$15.50');
const body_products3= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd4101ae9/crop/026556952_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','new!','Fresh Fall Morning','Single Wick Candle','$15.50');
const body_products4= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16d2c5fa/crop/026539010_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Pumpkin Apple','Single Wick Candle','15.50');
const body_products5= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb1d9c24a/crop/026539015_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Sweet Cinnamon Pumpkin','Single Wick Candle','$15.50');
const body_products6= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw583e6c4d/crop/026557701_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Midnight Amber Glow','Single Wick Candle','$15.50');
const body_products7= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw70b7979f/crop/026556640_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Spooky Cider Lane', 'Single Wick Candle','$15.50');
const body_products8= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw735d2425/crop/026544291_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Vampire Blood', 'Single Wick Candle', '$15.50');
const body_products9= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfd2d8adc/crop/026553513_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Marshmallow Fireside','Single Wick Candle','$15.50');
const body_products10= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9ea3b6f7/crop/026556954_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','The Perfect Autumn', 'Single Wick Candle','$15.50');

const body_products11= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe9e4de16/crop/026502619_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Water Globe Eye Pedestal','3-Wick Candle Holder','$69.95');
const body_products12= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw56bc39ce/crop/026529853_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Spider Branches with Base','3-Wick Candle Holder','$24.95');
const body_products13= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8b53b279/crop/026537852_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New','Pumkin Patch', '3-Wick Candle Holder','$29.95');
const body_products14= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa415c4e9/crop/026529851_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Haunted House Luminary','3-Wick Candle Holder','$200.00');
const body_products15= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3d72f7f9/crop/026502622_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Water Goble Skull', 'Single Wick Candle Holder', '$59.95');
const body_products16= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8fc9b147/hires/026525694_alt_1.jpg?sh=413&yocs=o_s_','New!','Headless Bust Pedestal','3-Wick Candle Holder', '$99.95');
const body_products17= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc3f63042/hires/026540659_alt_1.jpg?sh=413&yocs=o_s_','New!', 'Orange Flocked Pumkin Pedestal', '3-Wick Candle Holder','$39.95');
const body_products18= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd2235457/crop/026530100_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Owls with Base', '3-Wick Candle Holder', '$24.95');
const body_products19= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa687b3af/crop/026537844_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Leafy Vine Bowl','3-Wick Candle Holder', '$24.95');
const body_products20= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8c9a1d44/crop/026525696_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','White Owl Pedestal','3-Wick Candle Holder','$39.95');

const body_products21= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb898fca3/crop/026538792_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Honeycrisp Apple', '3-Wick Candle','$16.50');
const body_products22= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0bf480b2/crop/026553603_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Spooky Cider Lane','3-Wick Candle','$22.50');
const body_products23= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc650b719/hires/026536765_alt_1.jpg?sh=413&yocs=o_s_','Online Exclusive', 'Fall Farmhouse','3-Wick Candle','$16.50');
const body_products24= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3a5fce80/crop/026546723_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance','Cuddle Weather','3-Wick Candle','$16.50');
const body_products25= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfeb1e3f8/crop/026538273_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Coffee & Whiskey', '3-Wick Candle','$16.50');
const body_products26= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb5c29370/crop/026537144_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Vampire Blood','3-Wick Candle','$16.50');
const body_products27= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8787746d/crop/026553000_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Midnight Amber Glow', '3-Wick Candle','$16.50')
const body_products28= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce733a95/crop/026544277_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Pumpkin Pecan Waffles', '3-Wick Candle','$14.50');
const body_products29= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw08425f04/crop/026537627_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Pumpkin Carving','3-Wick Candle','$16.50');
const body_products30= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd4f773f0/crop/026546123_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Pumpkin Spice Latte','3-Wick Candle','16.50')

// products_arr.push(body_products,body_products1,body_products2,body_products3)

// console.log(products_arr)

let products_store=[]
    products_store.push(body_products,body_products1,body_products2,body_products3,
                    body_products4,body_products5,body_products6,body_products7,
                    body_products8,body_products9,body_products10,body_products11,
                    body_products12,body_products13,body_products14,body_products15,
                    body_products16,body_products17,body_products18,body_products19,
                    body_products20, body_products21, body_products22, body_products23,
                    body_products24,body_products25,body_products26,body_products27,
                    body_products28,body_products29,body_products30)
    // console.log(products_store)
localStorage.setItem('body_products', JSON.stringify(products_store))

let data;
 data= JSON.parse(localStorage.getItem('body_products'))



let append= (data)=>{
   
    let body_pro= document.getElementById('body_pro');
    body_pro.innerHTML=null;
    data.forEach((el)=>{
        let div= document.createElement('div');
        let divname=  document.createElement('div');

        let image= document.createElement('img');
        let badge= document.createElement('h5');
        let name= document.createElement('h3');
        let type= document.createElement('h4');
        let price=document.createElement('h6');
        let add_button= document.createElement('button')
        let br= document.createElement('br')
        let br1= document.createElement('br')

        image.src= el.image;
        image.style.width='105%'
        // image.addEventListener('click',function(){
        //     console.log('Image')
        // })clic
       
        image.onclick=()=>{
             console.log(el)
            localStorage.setItem('pro_detail',JSON.stringify(el))
        window.location.href =  "./details.html"
        }
       
        badge.innerText= el.badge;
         badge.setAttribute("class", "badge")
     
        divname.innerText= el.name;
        divname.style.height='20px';
        divname.style.fontWeight='bolder';
        type.innerText=el.type;
        price.innerText=el.price;
        add_button.innerText="ADD TO BAG"
        divname.append(name)
        div.append(image,br,badge,divname,type,price,br1,add_button)
        body_pro.append(div)

    })
}
append(data);




 // sorting function 

 let sortlowtohigh=()=>{
     data[0]
   
        data.sort(function(a,b){
            return (a.price-b.price);
        })
    append(data)
    console.log(data)

}
