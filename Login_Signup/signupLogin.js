
// class AccData{
//     constructor(e,pass){
//         this.email = e;
//         this.password = pass;
//     }
// }  
function submit() {
    event.preventDefault();
    let Data = JSON.parse(localStorage.getItem("AccountData")) || [];
    let Email = document.getElementById('email').value;
    let Password = document.getElementById('Password').value;
    if(Email==Data.Email && Password==Data.password){
        alert("Login succesfully")
    }
    else if(Email==Data.email && Password!=Data.password){
        alert("Password dose not match")
    }
    else if(Email!=Data.email && Password==Data.password){
        alert("User dose not found")
    }
    console.log(Data.email)
}

