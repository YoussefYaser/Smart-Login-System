var login = document.getElementById('login');
var email = document.getElementById('email');
var password = document.getElementById('password');
var inputs = [email, password];
var alertMessage1 = document.getElementById('alert1');
var alertMessage2 = document.getElementById('alert2');

var users;

if(localStorage.getItem('users') === null)
    users = [];
else
    users = JSON.parse( localStorage.getItem('users'));


login.onclick = function(event){
    var valid = true;
    alertMessage1.classList.replace('d-block', 'd-none');
    alertMessage2.classList.replace('d-block', 'd-none');


    var user = {
        email : email.value, 
        password : password.value
    };

    if(email.value.length == 0 || password.value.length == 0){
        alertMessage1.classList.replace('d-none', 'd-block');
        email.classList.add('is-invalid');
        password.classList.add('is-invalid');
        event.preventDefault();
    }
    else{
        if(!checkUser(user)){
            alertMessage2.classList.replace('d-none', 'd-block');
            email.classList.add('is-invalid');
            password.classList.add('is-invalid');
            event.preventDefault();
        }   
    }

}
