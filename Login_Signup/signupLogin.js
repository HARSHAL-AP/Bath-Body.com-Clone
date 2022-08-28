function mainlogin(){
    
    let arr=JSON.parse(localStorage.getItem("User"))||[]
    let bag=false
    for(let i=0;i<arr.length;i++){
       if(arr[i].email===document.getElementById("email").value && arr[i].password===document.getElementById("Password").value){
       bag=true;
       break;
       }
       
    }
   

   if(bag===true){
    alert("Login Sucssesfull...!")
    window.location.href="/index.html"
   }
   else{
    alert("Incorect Password")
   }
  
}