let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let date = document.getElementById('date');
let btn = document.getElementById('submitbtn');
window.onload = function(){
    const params = new URLSearchParams(window.location.search);
    const destination = params.get('destination');
    if(destination){
        document.getElementById('destination').value = destination;
    }
}
btn.onclick = function(event){
if (!name.value.trim() || !email.value.trim() || !phone.value.trim() ||!date.value.trim() || !destination.value.trim())
{
    showError('please fill out this field')
    event.preventDefault();
    return false;
}
else
{
    window.alert('Booking Successfully');
    name.value = '';
    email.value = '';
    phone.value = '';
    date.value = '';
}
}