let productData =[
    {
    brand: "Shea Butter Cleansing Bar",
    name: "Midnight Amber Glow",
    price: 8.50, 
    productID: "soap1",
    catagory: "Casual",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4c69b99b/crop/026520252_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Hand Sanitizer Spray",
    name: "Crisp Morning Air",
    price: 6.50, 
    productID: "sant1",
    catagory: "casual",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe6716b5a/crop/026286015_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Eucalyptus Spearmint",
    price: 8.50,  
    productID: "soap2",
    catagory: "fancy",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw740637cf/hires/026455708_alt_1.jpg?sh=413&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Japanese Cherry Blossom",
    price:8.50, 
    productID: "soap3",
    catagory: "fancy",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4d912e20/crop/026330005_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Sweater Weather",
    price: 8.50,
    productID: "soap4",
    catagory: "formal",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc63580a/crop/026540146_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Coffee & Whiskey",
    price:8.50,  
    productID: "soap5",
    catagory: "formal",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4d0ea3a6/crop/026520256_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Cucumber Melon",
    price: 8.50,  
    productID: "soap6",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0751d59e/crop/026330002_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Marble",
    price: 8.50,  
    productID: "soap8",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw010af843/crop/026394008_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Orange Ginger",
    price: 8.50,
    productID: "soap9",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbf6f3f46/crop/026412376_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Pure Wonder",
    price: 8.50, 
    productID: "soap10",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw0404dd46/hires/026399286_alt_1.jpg?sh=413&yocs=o_s_"
  },
  {
    brand: "PocketBac Hand Sanitizers, 5-Pack",
    name: "Strawberry Pound Cake",
    price: 8.50,
    productID: "soap11",
    catagory: "formal",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw99be6830/crop/026232764_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle & Clean Foaming Hand Soap",
    name: "Kitchen Lemon",
    price: 7.50,  
    productID: "soap11",
    catagory: "formal",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwcabace75/crop/026393062_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "A Thousand Wishes",
    price: 8.50, 
    productID: "soap12",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw95a3b08d/crop/026399281_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle & Clean Foaming Hand Soap",
    name: "Eucalyptus Spearmint",
    price: 7.50,
    productID: "sant2",
    catagory: "fancy",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw386ad733/crop/026410944_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Leather & Brandy",
    price: 8.50,
    productID: "soap13",
    catagory: "Casual",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5dfe1437/crop/026520258_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle Foaming Hand Soap",
    name: "Stardust Magic",
    price: 7.50,
    productID: "sant3",
    catagory: "glycerine",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd899059f/crop/026529408_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle & Clean Foaming Hand Soap",
    name: "Rose Water & Ivy",
    price: 7.50,
    productID: "sant4",
    catagory: "glycerine",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4c958b61/crop/026393066_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Gingham",
    price: 8.50,
    productID: "soap14",
    catagory: "formal",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwfc1c0f1e/crop/026413939_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle & Clean Foaming Hand Soap",
    name: "Vanilla Coconut",
    price: 7.50,
    productID: "sant5",
    catagory: "formal",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2329da46/crop/026522836_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Butterfly",
    price: 7.50,
    productID: "soap15",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw81404f78/crop/026440788_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle Foaming Hand Soap",
    name: "Vampire Blood",
    price: 7.50,
    productID: "soap16",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3e04d4d8/crop/026526089_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Black Cherry Merlot",
    price: 8.50,
    productID: "soap17",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw32311cc9/crop/026330003_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Champagne Toast",
    price: 8.50,
    productID: "soap18",
    catagory: "fancy",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3fe7b350/crop/026216739_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Shea Butter Cleansing Bar",
    name: "Warm Vanilla Sugar",
    price: 8.50,
    productID: "soap19",
    catagory: "fancy",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1d57e1e0/crop/026534926_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle Foaming Hand Soap",
    name: "Sweet Cinnamon Pumpkin",
    price: 8.50,
    productID: "sant6",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw7f3f4078/crop/026557137_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle & Clean Foaming Hand Soap",
    name: "Sunshine & Lemons",
    price: 7.50,
    productID: "sant7",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6f16603b/crop/026541372_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle Foaming Hand Soap",
    name: "White Pumpkin",
    price: 7.50,
    productID: "sant8",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw184f1974/crop/026557139_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  {
    brand: "Gentle Foaming Hand Soap",
    name: "Pumpkin Apple",
    price: 7.50,
    productID: "sant9",
    catagory: "travel",
    img: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd44c8778/crop/026557505_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
  },
  
]


let productsCont = document.getElementById("main2");

// let productsCont = document.getElementById("main2");
// let filter = document.getElementById("filter");


function displayProducts(productData){
    productsCont.innerHTML="";
    productData.forEach(function(element){
        let product = document.createElement("div");
        
        
        
       
        let img = document.createElement("img");
        img.src= element.img;

        let name = document.createElement("h2");
        name.innerText = element.name;

        let brand = document.createElement("p");
        brand.innerText = element.brand;

        let catagory = document.createElement("h4");
        catagory.innerText = element.catagory;

        let productID = document.createElement("h4");
        productID.innerText = element.productID;

        let price = document.createElement("h3");
        price.innerText ="$"+" "+element.price;


        let price = document.createElement("p");
        price.innerText = element.price;
     


        let addtocart = document.createElement("button");
        addtocart.innerText = "Add To Bag";
        addtocart.setAttribute("class","button1")
       

        product.append(img,name,brand,price,addtocart);
        productsCont.append(product);
    })
  
}
  displayProducts(productData);
  
  filter.addEventListener("change",function(){
    if(filter.value === "All"){
      displayProducts(productData);
    }else{
      let filtered = productData.filter(function(element){
        return element.catagory===filter.value
      })
      displayProducts(filtered);
    }
  })