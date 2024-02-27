const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  clearErrors();
  if (!validateName()) {
    showErrorMessage(nameError, 'Please enter a valid name.');
  }
  if (!validateEmail()) {
    showErrorMessage(emailError, 'Please enter a valid email address.');
  }
  if (!validatePassword()) {
    showErrorMessage(passwordError, 'Password must be at least 8 characters long.');
  }
  if (!validateConfirmPassword()) {
    showErrorMessage(confirmPasswordError, 'Passwords do not match.');
  }
  if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateName() {
  const nameValue = nameInput.value.trim();
  return nameValue !== '';
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailValue);
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  return passwordValue.length >= 8;
}

function validateConfirmPassword() {
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  return confirmPasswordValue === passwordValue;
}

function showErrorMessage(element, message) {
  element.textContent = message;
}

function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
}