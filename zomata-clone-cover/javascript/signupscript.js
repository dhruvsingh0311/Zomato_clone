// Get the input fields and button
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signup-btn');

// Add event listener to the sign up button
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the input values
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the input fields are empty
  if (username === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  // Redirect to the next page (update the URL as needed)
  window.location.replace('./index.html');
});