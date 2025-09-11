// Profile dropdown
const profileIcon = document.getElementById('profile-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

if (profileIcon && dropdownMenu) {
  profileIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target)) dropdownMenu.style.display = 'none';
  });
}

// Precise 16+ age check
function is16OrOlder(dateStr){
  const dob = new Date(dateStr);
  if (Number.isNaN(dob.getTime())) return false;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
  return age >= 16;
}

// Register
const regForm = document.getElementById('register-form');
if (regForm) {
  regForm.addEventListener('submit', (e) => {
    const dob = document.getElementById('dob').value;
    if (!is16OrOlder(dob)) {
      e.preventDefault();
      alert('You must be at least 16 years old to register.');
      return;
    }
    // TODO: Hook into Firebase Auth createUserWithEmailAndPassword
  });
}

// Login
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    // TODO: Hook into Firebase Auth signInWithEmailAndPassword
  });
}

// Sell form feedback stub
const sellForm = document.getElementById('sell-form');
if (sellForm) {
  sellForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('sell-msg');
    msg.textContent = 'Thanks! We’re reviewing your submission and will email an offer shortly.';
    // TODO: Upload photos to Firebase Storage, save form data to Firestore
    sellForm.reset();
  });
}
