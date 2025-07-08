function registar(){
    let selectelement=document.getElementById("pickup");
    let selectvalue=selectelement.value;
    console.log(selectvalue); 
    const location=document.getElementById("location").value;   
    const day=document.getElementById("days").value;
    const rettime=document.getElementById("returntime").value;
    const loc=localStorage.getItem("details");
    const priceEl=document.getElementById("price");
    let price=0;
    if(selectvalue=="Simmakkal"){
        price=500;
    }
    else if(selectvalue=="Aathikulam"){
        price=250;
    }
    else if(selectvalue=="SuriyaNagar"){
        price=300;
    }
    priceEl.textContent=`Price: ${price}`;
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