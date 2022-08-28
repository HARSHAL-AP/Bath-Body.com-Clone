


function  creat_acount(event){
    event.preventDefault()
    var arr=JSON.parse(localStorage.getItem("User"))||[]
    let bag=true
    for(let i=0;i<arr.length;i++){
        if(arr[i].email===document.getElementById("CAemail").value){
            bag=false;
            alert("User Alrady exist Please Login ..!")
           break;
        }
    }
    
    if(bag===true){
        let user={
            "email":document.getElementById("CAemail").value,
            "password":document.getElementById("CApass").value,
        }
        arr.push(user)
        localStorage.setItem("User",JSON.stringify(arr))
        alert("Sign up Successful...")
       gotologinpage()
    }
    
    
    
    
    
    
    }

    function  gotologinpage(){

window.location.href="/Login_Signup/signupLogin.html"


    }