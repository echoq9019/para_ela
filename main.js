document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('hidden-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = form.username.value.trim().toLowerCase();
    const password = form.password.value.trim();

    const validUser = 'elara';
    const validPass = 'quinn2146';

    if (username === validUser && password === validPass) {
      alert('Login autorizado. Bem-vinda, ' + username + '!');
      setTimeout(() => {
        window.location.href = 'segredo.html';
      }, 500); // pequena pausa para mostrar o alerta
    } else {
      alert('Nome ou senha incorretos. Tente novamente.');
    }
  });
});
