document.getElementById('btn-withdraw').addEventListener('click', function() {

    const withdraField= document.getElementById('input-withdraw-field');
    const withdrawTotal= withdraField.value;
    const newWithdrawAmount= parseFloat(withdrawTotal)

    const withdrawTotalElement=document.getElementById('withdrawtotal');
    const withdrawTotalAmount= withdrawTotalElement.innerText;
    const withdrawBalance= parseFloat(withdrawTotalAmount)

   

    const totalBalanceElement= document.getElementById('Balance-total');
    const totalBalanceString= totalBalanceElement.innerText;
    const totalBalance= parseFloat(totalBalanceString)

    withdraField.value='';

    if( newWithdrawAmount > totalBalance){
        alert('dont this available ')
        return
    }

    const withdrawTotalBalance= withdrawBalance+newWithdrawAmount;
    withdrawTotalElement.innerText= withdrawTotalBalance;

    const curerntwithdrawBalanceTotal= totalBalance - newWithdrawAmount
    totalBalanceElement.innerText=curerntwithdrawBalanceTotal;

   
})