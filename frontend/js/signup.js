const signupBtn = document.getElementById('signup-btn');
const passwordInput = document.getElementById('password');

signupBtn.addEventListener('click', function(){});
passwordInput.addEventListener('input', function(){});

app.post('/api/signup', (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const passsword = req.body.passsword;
});