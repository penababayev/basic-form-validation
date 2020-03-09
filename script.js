const name=document.getElementById('name');
const password=document.getElementById('password');
const form=document.getElementById('form');
const errorMessage=document.getElementById('errorMessage');

form.addEventListener('click', (e)=> {
    const messages=[];
    if(name.value==='' || name.value == null) {
        messages.push('Name is required!');
    }
    else if (password.value.length <= 6) 
    {
        messages.push('Password must be longer than 6 character');
    }

    if (messages.length>0) {
        e.preventDefault();
        errorMessage.innerText=messages.join(', ');

    }
    
});