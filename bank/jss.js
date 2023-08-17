document.getElementById('btn-withdraw').addEventListener('click', function() {

    const withdraField= document.getElementById('input-withdraw-field');
    const withdrawTotal= withdraField.value;
    const newWithdrawAmount= parseFloat(withdrawTotal)

    const withdrawTotalElement=document.getElementById('withdrawtotal');
    const withdrawTotalAmount= withdrawTotalElement.innerText;
    const withdrawBalance= parseFloat(withdrawTotalAmount)

   
    const withdrawTotalBalance= withdrawBalance+newWithdrawAmount;
    withdrawTotalElement.innerText= withdrawTotalBalance;

    const totalBalanceElement= document.getElementById('Balance-total');
    const totalBalanceString= totalBalanceElement.innerText;
    const totalBalance= parseFloat(totalBalanceString)

    if( newWithdrawAmount > totalBalance){
        alert('dont this available ')
    }

    const curerntwithdrawBalanceTotal= totalBalance - newWithdrawAmount
    totalBalanceElement.innerText=curerntwithdrawBalanceTotal;

    withdraField.value='';
})