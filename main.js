document.addEventListener('DOMContentLoaded', () => {
  const clickable = document.getElementById('clickable');
  const formContainer = document.getElementById('loginFormContainer');
  const form = document.getElementById('loginForm');

  clickable.addEventListener('click', () => {
    formContainer.style.display = 'block';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value.trim().toLowerCase();

    if (username === 'elara' && password === 'quinn2146') {
      window.location.href = './secret.html';
    } else {
      alert('Incorrect. Try again.');
    }
  });
});
