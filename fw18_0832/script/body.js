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
const body_products= new products ('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb859bf7f/crop/026490235_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance','Midnight Amber Glow','Fine Fragrance Mist','$17.50');
const body_products1= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw279c6757/crop/026494139_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Sweater Weather', 'Shower Gel', '$13.50')
const body_products2= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3ef2d6ce/crop/026495990_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Coffee & Whiskey', 'Body Spray', '$14.50')
const body_products3= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw54179ac4/crop/026494129_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Pink Suede', 'Ultimate Hydration Body Cream','$16.50');
const body_products4= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8e559fb4/crop/026494140_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Ivory Cashmere','Shower Gel', '$13.50');
const body_products5= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4936bbeb/crop/026517924_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Bonfire Bash', 'Fine Fragrance Mist', '$17.50');
const body_products6= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe926b9b9/crop/026490239_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Midnight Amber Glow','Daily Nourishing Body Lotion', '$15.50');
const body_products7= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2272e6c2/crop/026494122_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Ivory Cashmere', 'Fine Fragrance Mist', '$16.50');
const body_products8= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe94d668f/crop/026494135_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Pink Suede', 'Daily Nourishing Body Lotion','$14.50');
const body_products9= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2ca41ca6/crop/026495998_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Coffee & Whiskey','3-in-1 Hair, Face & Body Wash', '$13.50')
const body_products10= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ed209c3/crop/026494121_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Sweater Weather', 'Fine Fragrance Mist','$16.50');

const body_products11= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6be440b/crop/026490241_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Midnight Amber Glow', 'Shower Gel','$14.50');
const body_products12= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw89f3e202/crop/026402400_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Lavender Sandalwood','Ultimate Hydration Body Cream', '$17.50');
const body_products13= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc98d8e3d/crop/026494123_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Pink Suede','Fine Fragrance Mist', '$16.50');
const body_products14= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw8e20be00/crop/026501151_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','Online Exclusive','Crisp Morning Air', 'Shower Gel', '$13.50');
const body_products15= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw384509fa/crop/026402407_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Cedarwood Ylang Ylang','Essential Oil Mist', '$15.50');
const body_products16= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe6eb9376/crop/026495836_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Sunrise Woods', 'Daily Nourishing Body Lotion', '$14.50');
const body_products17= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc3ce9da4/crop/026490237_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Midnight Amber Glow', 'Ultimate Hydration Body Cream','$17.50');
const body_products18= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6d059591/crop/026495843_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance','Golden Hour Coast','Shower Gel','$13.50');
const body_products19= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwba903513/crop/026495832_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance','Autumn Drive', 'Ultimate Hydration Body Cream', '$16.50');
const body_products20= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbe3f5bab/crop/026533846_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Warm Vanila Sugar', 'Fine Fragrance Mist', '$16.50');

const body_products21= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf7864bc9/crop/026402390_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Eucalyptus Sage', 'Body Wash and Foam Bath','$15.50');
const body_products22= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7a7addbe/crop/026495999_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Leather & Brandy', '3-in-1 Hair, Face & Body Wash','$13.50');
const body_products23= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw22c9610c/crop/026494225_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Enchanted Candy Potion', 'Ultimate Hydration Body Cream', '$16.50');
const body_products24= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5fc327ba/crop/026494220_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!','Wicked Vanilla Woods','Fine Fragrance Mist','$16.50')
const body_products25= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2b7eaa43/crop/026499760_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','Online Exclusive', 'Twilight Woods','Fine Fragrance Mist','$16.50');
const body_products26= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0ca2df96/crop/026402388_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance', 'Lavender Sandalwood', 'Body Wash and Foam Bath', '$15.50');
const body_products27= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwae70344e/crop/026495993_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance','Mineral & Sea Salt', 'Body Spray', '$14.50');
const body_products28= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw33ebb892/crop/026494224_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New!', 'Wicked Vanilla Woods', 'Ultimate Hydration Body Cream', '$16.50');
const body_products29= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwdc6fe860/crop/026494221_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_','New Fragrance','Enchanted Candy Potion', 'Fine Fragrance Mist ', '$16.50');
const body_products30= new products('https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ab59824/crop/026495985_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_', 'New Fragrance', 'Mineral & Sea Salt', 'Ultimate Hydration Body Cream', '$16.50');



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

        let image= document.createElement('img');
        let badge= document.createElement('span');
        let name= document.createElement('h3');
        let type= document.createElement('h4');
        let price=document.createElement('span');
        let add_button= document.createElement('button')
        let br= document.createElement('br')
        let br1= document.createElement('br')

        image.src= el.image;
        badge.innerText= el.badge;
        badge.style.color='#005699'
        badge.style.fontSize='14px'
        badge.style.fontWeight='Bold'
        badge.style.fontStyle='Italic'
        name.innerText= el.name;
        type.innerText=el.type;
        price.innerText=el.price;
        add_button.innerText="ADD TO BAG"

        div.append(image,br,badge,name,type,price,br1,add_button)
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
