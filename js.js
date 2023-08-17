document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFlied= document.getElementById('user-email');
    const email= emailFlied.value;
    console.log(email)

    const passwordFlied= document.getElementById('user-password');
    const password= passwordFlied.value;
    

    if( email==='nahid@gmail.com' && password==='nahidbro'){
        window.location.href = 'bank'
    }
    else{
        alert('invalid user')
    }
})