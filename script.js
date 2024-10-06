const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password= document.getElementById('password');
const nf = document.getElementById('nf');
const ef = document.getElementById('ef');
const pf = document.getElementById('pf');
username.addEventListener('input',()=>{
    if(username.value.length>5)
    {
        nf.textContent='Valid name';
        nf.className='valid';
    }
    else
    {
        nf.textContent='InValid name';
        nf.className='error';
    }
})
password.addEventListener('input',()=>{
    if(password.value.length>8)
    {
        pf.textContent='Valid Password';
        pf.className='valid';
    }
    else
    {
        pf.textContent='InValid Password';
        pf.className='error';
    }
})
email.addEventListener('input',()=>{
    if(email.validity.valid)
    {
        ef.textContent='Valid Email Id';
        ef.className='valid';
    }
    else
    {
        ef.textContent='InValid Email Id';
        ef.className='error';
    }
})
form.addEventListener('submit',(event)=>{
    if(username.value.length<5 || password.value.length<8 || !email.validity.valid)
    {
        event.preventDefault();
        alert("Please enter all fields appropriately");
    }
})