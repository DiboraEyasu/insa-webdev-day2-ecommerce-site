const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', showUser);


loginBtn.addEventListener('click', showUser);

function showUser(e) {
    e.preventDefault(); // Stops the page from refreshing instantly
    
    const typedUsername = document.getElementById('name').value;
    console.log('Username:', typedUsername);
}
