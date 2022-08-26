// let createAcc = (event)=>{
//     event.preventDefault()
//     console.log('kallu');
// }
// createAcc();

class AccData{
    constructor(n,l,e,z,p,pass){
        this.name = n;
        this.email = e;
        this.zipCode = z;
        this.phone = p;
        this.password = pass;
    }
   
}

function createAcc(){


    event.preventDefault();
    // console.log('juhi');

    let form = document.getElementById('form') 
    let firstName=form.CAname.value;
    let LastName=form.CAlast_name.value;
    let Email=form.CAemail.value;
    let CAconform_mail=form.CAconform_mail.value;
    let CAzipcode=form.CAzipcode.value;
    let PHnumber=form.PHnumber.value;
    let CAPass=form.CApass.value;
    let Name = firstName + ' ' + LastName;
    // console.log(firstName,LastName,Email,CAconform_mail,CAzipcode,PHnumber,CAPass)
    // let Data=JSON.parse(localStorage.getItem("AccountData"))||[];
    if(Email == CAconform_mail){
        let p1 = new AccData(Name,Email,CAconform_mail,CAzipcode,PHnumber,CAPass)  //constructor fun
        // Data.push(p1)
        localStorage.setItem("AccountData",JSON.stringify(p1))
        alert("Account Created Successfully");
        window.location.href='signupLogin.html'
    }
    else{
        alert('Please Cheak your email or password');
    }

    // console.log(Data)

   
}


