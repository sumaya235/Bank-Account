
// handle deposit with event handler
document.getElementById('deposit-button').addEventListener('click', function(){
    const captureDepositInput = document.getElementById('deposit-input');
    // console.log(captureDepositInput);
    const depositAmount = captureDepositInput.value;
    console.log(depositAmount);

// update deposit
    const captureDepositTotal = document.getElementById('total-deposit');

    const newDeposit = parseFloat(captureDepositTotal.innerText) + parseFloat(depositAmount);
    
    captureDepositTotal.innerText=newDeposit;

// update balance
    const captureBalanceTotal = document.getElementById('total-balance');

    const newBalance = parseFloat(captureBalanceTotal.innerText) + parseFloat(depositAmount);
    captureBalanceTotal.innerText=newBalance;
// clean the deposit input field
    captureDepositInput.value='';
});



// handle withdraw with event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const captureWithdrawInput = document.getElementById('withdraw-input');
    // console.log(captureWithdrawInput);
     const withdrawAmount = parseFloat (captureWithdrawInput.value);
     console.log(withdrawAmount);

    // update deposit
    const captureWithdrawTotal = document.getElementById('total-withdraw');

    const newWithdraw = parseFloat(captureWithdrawTotal.innerText) + parseFloat(withdrawAmount);
    
    captureWithdrawTotal.innerText=newWithdraw;

    // update balance
    const captureBalanceTotal = document.getElementById('total-balance');

    const newBalance = parseFloat(captureBalanceTotal.innerText) - parseFloat(withdrawAmount);
    captureBalanceTotal.innerText=newBalance;

     // clean the deposit input field
    captureWithdrawInput.value='';

}); 
