
// deposite 
document.getElementById('btn-deposite').addEventListener('click', function(){

    const depositeField= document.getElementById('input-deposite-field');
    const depositeTotal= depositeField.value;
    const newAmount=parseFloat(depositeTotal);
    


    const depositeTotalElement= document.getElementById('btn-depositetotal');
    const depositeTotalAmount =depositeTotalElement.innerText;
    const totalAmount = parseFloat(depositeTotalAmount)

    const currentDepositeAmount= totalAmount + newAmount;
    depositeTotalElement.innerText= currentDepositeAmount;


    const totalBalanceElement= document.getElementById('Balance-total');
    const totalBalanceString= totalBalanceElement.innerText;
    const totalBalance= parseFloat(totalBalanceString)
    
    const currentTotalBalance = totalBalance + newAmount;
    totalBalanceElement.innerText = currentTotalBalance;
    console.log(currentTotalBalance)

    depositeField.value = '';
})

// withdraw 

