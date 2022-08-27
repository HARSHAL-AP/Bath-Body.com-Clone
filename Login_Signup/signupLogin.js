
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
}

