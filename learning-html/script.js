let balance=1000;
const balanceEI=document.getElementById("balance");
const historyEI=document.getElementById("history");
function addExpense(){
    const item=document.getElementById("item").value;
    const amt=parseFloat(document.getElementById("amt").value);
    if(item==""||amt<=0){
        alert("Please enter the vaild item and amount.");
        return ;
    }
    if(amt>balance){
        alert("Not enough balance!");
        return;
    }
    balance=balance-amt;
    balanceEI.textContent=`Balance:${balance}`;
    const prdata=localStorage.getItem("transcation");
    let data;
    if(prdata){
        data=JSON.parse(prdata);
        data.push({item:item,amt:amt});

    } else {
        data=[{item:item,amt:amt}];
    }
    localStorage.setItem("transcation",JSON.stringify(data));
    const ntdata=localStorage.getItem("history");
    let hist;
    for(let i=0;i<ntdata.length;i++){
        hist=hist+data[{amt:amt}];
    }
    localStorage.setItem("history",hist);
    const row=document.createElement("tr");
    row.innerHTML=`<td>${item}</td><td class="expense">-${amt}</td>`;
    historyEI.appendChild(row);
    document.getElementById("item").value="";
    document.getElementById("amt").value="";
}