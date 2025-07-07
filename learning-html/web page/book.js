function registar(){
    let selectelement=document.getElementById("pick-up");
    let selectvalue=selectelement.value;
    console.log(selectvalue); 
    const location=document.getElementById("location");   
    const day=document.getElementById("day");
    const rettime=document.getElementById("return-time");
    if(day==""&&location==""){
        alert("Please enter all the details.");
        return;
    }
}