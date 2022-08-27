
<<<<<<< HEAD
// class AccData{
//     constructor(e,pass){
//         this.email = e;
//         this.password = pass;
//     }
// }  
function submit() {
    event.preventDefault();
    let Data = JSON.parse(localStorage.getItem("AccountData")) ||null;
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('Password').value;
    if(Email==Data.email && Password==Data.password){
        alert("Login succesfully")
        window.location.href="/index.html"
    }
    else if(Email==Data.email && Password!=Data.password){
        alert("Password dose not match")
    }
    else if(Email!=Data.email && Password==Data.password){
        alert("User dose not found")
    }
//console.log(Data)
=======
function submit(){
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#Password").value;

    let a=validate(email, password);
    
>>>>>>> 4688d2284f6677a0b76b6c9ea4b0f112e21cd5f2
}

function validate(email, password){
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let count=0;
    for(let ele of users){
        if(ele.Email==email){
            count++;
            if(ele.Password==password){
                ele.Login=true;
                localStorage.setItem("users",JSON.stringify(users));
                let userStatus=[];
                userStatus.push(ele);
                localStorage.setItem("status",JSON.stringify(userStatus));
                alert("Login Successful!");
                return true;
            }
            else{
                alert("Wrong credentials");
                return false;
            }
        }
    }
    if(count==0){
        alert("User doesn't exist, Sign Up");
        window.location.href="signup.html";
    }
}