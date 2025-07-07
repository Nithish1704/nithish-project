function registar(){
    let selectelement=document.getElementById("pick-up");
    let selectvalue=selectelement.value;
    console.log(selectvalue); 
    const location=document.getElementById("location").value;   
    const day=document.getElementById("day").value;
    const rettime=document.getElementById("returntime").value;
    const loc=localStorage.getItem("details");
    let data;
    if(loc){
        data=JSON.parse(loc);
        data.push({location:loc,returntime:rettime});
    }
    else{
        data=[{location:loc,returntime:rettime}];
    }
    localStorage.setItem("details",JSON.stringify(data));
    if(day==""&&location==""){
        alert("Please enter all the details.");
        return;
    }
    else{
        alert("Successfully");
        return;
    }
}