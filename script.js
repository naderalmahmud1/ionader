
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');
  const content = document.getElementById('content');
  const loginBox = document.getElementById('loginBox');

  if ((username === 'naderpersonal1' || username === 'naderviewers1') && password === 'naDer2017') {
    message.innerText = '';
    loginBox.style.display = 'none';
    content.style.display = 'block';
  } else {
    message.innerText = 'Incorrect username or password.';
  }
}
