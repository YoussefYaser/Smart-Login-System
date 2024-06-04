// validation code

function validation(elem){

    var regex = {
        email : /^[a-zA-Z][\w-\.]*@\w+\.[a-z]+$/,
        password : /^[A-Z](?!_)[\w!@#\$%\^&*\+]{7,20}$/
    };
    
    if(regex[elem.id].test(elem.value)){
        elem.classList.remove('is-invalid');
        return true;
    }
    else{
        elem.classList.add('is-invalid');
        return false;
    }
}

function checkUser(obj, key='all'){
    if(key === 'all'){
        for(var i=0; i<users.length; i++){
            if(obj.email === users[i].email && obj.password === users[i].password){
                sessionStorage.setItem('currentUser', users[i].name);
                return true;
            }
        }
        return false;
    }
    else{
        for(var i=0; i<users.length; i++){
            if(obj[key] === users[i][key])
                return true;
        }
        return false;
    }
    
}

//----------------------------------------------------------------------------------------------------------------------