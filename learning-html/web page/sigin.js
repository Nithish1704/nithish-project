function submit() {
    const nameEl = document.getElementById("name").value;
    const emailEl=document.getElementById("email").value;
    const passwordEl=document.getElementById("password").value;
    console.log(passwordEl);
    let data;
    const El=localStorage.getItem("details");
    if(El){
        data=JSON.parse(El);
        data.push({name:nameEl,email:emailEl});
    }
    else{
        data=[{name:nameEl,email:emailEl}];
    }
    localStorage.setItem("details",JSON.stringify(data));
}
