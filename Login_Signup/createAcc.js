
function main(){
    let name=document.querySelector("#CAname").value;
    let email=document.querySelector("#CAemail").value;
    let password=document.querySelector("#CApass").value;

    let users=JSON.parse(localStorage.getItem("users"))||[];
    let a=users.filter(function(ele){
        return ele.Email==email;
    })
    if(a.length!=0) alert("User Email Already exist")
    else{
        saveUserInLS(name, email, password);
    }
}
function saveUserInLS(a, b ,c){
    let user1=new User(a, b, c);
    let users=JSON.parse(localStorage.getItem("users"))||[];
    users.push(user1);
    localStorage.setItem("users",JSON.stringify(users));
}

class User{
    constructor(name, email, password){
        this.Name=name;
        this.Email=email;
        this.Password=password;
        this.Login=false;
    }
}


