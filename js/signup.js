
var userName = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signup = document.getElementById('signup');
var alertMessage1 = document.getElementById('alert1');
var modal = document.querySelector('[data-bs-target="#validationModal"]');
var users ;


if(localStorage.getItem('users') === null)
    users = [];
else
    users = JSON.parse(localStorage.getItem('users'));

signup.onclick = function(event){
    var valid = true;
    alertMessage1.classList.replace('d-block', 'd-none');

    valid = validation(email) && valid;
    valid = validation(password) && valid;

    if(!valid){
        modal.click();
        event.preventDefault();
    }
    else{
        var user = {
            name : userName.value, 
            email : email.value,
            password : password.value
        };

        for(var i=0; i<users.length; i++){
            if(checkUser(user, 'name') || checkUser(user, 'email') || checkUser(user, 'password')){
                alertMessage1.classList.replace('d-none', 'd-block');
                userName.classList.add('is-invalid');
                email.classList.add('is-invalid');
                password.classList.add('is-invalid');
                event.preventDefault();
                return ;
            }
        }
        
        addUser(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function addUser(obj){
    users.push(obj);
}

