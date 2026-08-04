const loginBtn = document.querySelector('.login-btn');
const passwordInput = document.getElementById('password');


loginBtn.addEventListener('click', showUser);


loginBtn.addEventListener('click', showUser);

function showUser(e) {
    e.preventDefault(); // Stops the page from refreshing instantly
    
    const typedUsername = document.getElementById('name').value;
    console.log('Username:', typedUsername);
}

// 1. Initialize the Google client when the page loads
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "YOUR_GOOGLE_CLIENT_://googleusercontent.com",
    callback: handleCredentialResponse // The function that runs after user logs in
  });

  // 2. Render the official button inside an HTML element with id "google-btn"
  google.accounts.id.renderButton(
    document.getElementById("google-btn"),
    { theme: "outline", size: "large" } 
  );
};

// 3. Handle the secure token sent back by Google
function handleCredentialResponse(response) {
  // The 'response.credential' is a JSON Web Token (JWT) from Google
  const googleToken = response.credential;

  // Send this token to your backend server using native Fetch API
  fetch("https://yourbackend.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: googleToken })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      // Save your login token and redirect user
      localStorage.setItem("userToken", data.token);
      window.location.href = "/dashboard.html";
    } else {
      alert("Google login failed: " + data.message);
    }
  })
  .catch(err => console.error("Network error:", err));
}

