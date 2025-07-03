function submit(){
    Event.preventdefault();
    const password=document.getElementById("password");
    const confirmpass=document.getElementById("confirmpassword");
    localStorage.getItem("name");
    localStorage.getItem("email");
    localStorage.getItem("number");
    if(password==confirmpass){
        alert("Login successfully completed");
    }
    else{
        alert("Invalid password");
    }
}
console.log(100);