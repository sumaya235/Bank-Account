// document.getElementById("submit-area").addEventListener('click', function (){
//     const emailField = document.getElementById("user-mail");
//     const userEmail=emailField.Value;
//     console.log(userEmail);
// })

document.getElementById('submit-area').addEventListener('click', function(){
     const emailCapture = document.getElementById('user-mail');
     const userEmail = emailCapture.value;
     
    //  get user password
    const passCapture = document.getElementById('user-pass');
     const userPass = passCapture.value;

     if (userEmail == 'setu@gmail.com' && userPass == 'pass' ){
         window.location.href = 'banking.html';

        // console.log('valid user');
     }


}) 