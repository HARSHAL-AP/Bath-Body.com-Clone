
function submit(){
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#Password").value;

    let a=validate(email, password);
    
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