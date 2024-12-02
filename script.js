// Simulate navigation
function navigate(page) {
  if (page === 'home') {
    window.location.href = 'home.html';
  } else if (page === 'calendar') {
    window.location.href = 'calendar.html';
  }
}

// Handle login and registration (dummy handlers)
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Logged in successfully!');
  navigate('home');
});

document.getElementById('registerForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Account registered successfully!');
});
