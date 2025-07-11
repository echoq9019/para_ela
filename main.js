document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim().toLowerCase();

  if (username === 'elara' && password === 'quinn2146') {
    window.location.href = 'secret.html';
  } else {
    alert('Incorrect. Try again.');
  }
});
