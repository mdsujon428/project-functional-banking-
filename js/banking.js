function getInputValue(inputId){
    const InputField=document.getElementById(inputId);
    const inputAmountText=InputField.value;
    const amountValue=parseFloat(inputAmountText);

    //clera input field
    InputField.value="";
    return depositAmount=parseFloat(amountValue);
}

//function to update deposit and withdraw text.
function updateTotalField(totalFieldId,amount){
    
    const totalElement=document.getElementById(totalFieldId);
    const TotalText=totalElement.innerText;
    const previousdeopositTotal=parseFloat(TotalText);
    totalElement.innerText=previousdeopositTotal + amount;
}

//get Current Balance
function getCurrentBalance(){
    const balanceTotal= document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText); 
    return previousBalanceTotal;
    
}

//update balance 
function updatebalance(amount,isAdd){
    const balanceTotal=document.getElementById('balance-total');
    const previousBalanceTotal=getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText=previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText=previousBalanceTotal - amount;
    }
}


//deposit button handle
document.getElementById("deposit-btn").addEventListener('click',function(){

    const depositAmount=getInputValue('deposit-input');
    if(depositAmount >0){
        updateTotalField('deposit-total',depositAmount);
        updatebalance(depositAmount,true);
    }
});

//withdrow button handle
document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawAmount=getInputValue('withdraw-input'); 
    const currentBalance=getCurrentBalance();
    console.log("ok");
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total',withdrawAmount);
        updatebalance(withdrawAmount,false);
    }
});