document.getElementById('hidden-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = this.username.value.toLowerCase().trim();
  const password = this.password.value.trim();

  const validUser = 'elara';
  const validPass = 'quinn2146';

  if (username === validUser && password === validPass) {
    alert('Login autorizado. Bem-vinda, ' + username + '!');
    window.location.href = 'segredo.html';
  } else {
    alert('Nome ou senha incorretos. Tente novamente.');
  }
});
