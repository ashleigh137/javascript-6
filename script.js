function validate(e)
{
 e.preventDefault();

 const email = document.getElementById('email').value;
 const pass = document.getElementById('password').value;
 const age = document.getElementById('age').value;
 const msgBox = document.getElementById('message');
    
let message = '';

if ( email == '')
{
    message = 'Please enter an email.';
    msgBox.style.color = 'red';
}
else if ( pass == '')
{
    message = 'Please enter a password.';
    msgBox.style.color = 'red';
}
else if ( age == '')
{
    message = 'Please enter your age.';
    msgBox.style.color = 'red';
}
else
{
    message = 'Login succesful';
    msgBox.style.color = 'green';
}
msgBox.innerHTML = message;
}

function myFunction() {
  document.getElementById("result").innerHTML =
  document.getElementById("demo").firstChild.nodeValue;
  document.getElementById("result1").innerHTML =
  document.getElementById("demo").childNodes[0].nodeValue;
}

// Run validate when login is clicked
document.getElementById("loginForm").onsubmit = validate;



// Real-time validation (like the screenshots)

document.getElementById("email").oninput = () => validate({ preventDefault: () => {} });

document.getElementById("password").oninput = () => validate({ preventDefault: () => {} });

document.getElementById("age").oninput = () => validate({ preventDefault: () => {} });