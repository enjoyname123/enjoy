let currentUserData = {}; // Variable to hold the fetched data

async function handleLogin() {
    const user = document.getElementById('userid').value;
    const pass = document.getElementById('password').value;

    try {
        // Send credentials to your local backend
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userid: user, password: pass })
        });

        if (response.ok) {
            // Retrieve the specific user's data from the server
            currentUserData = await response.json(); 
            
            // Populate the dashboard with the fetched data
            document.getElementById('login-error').classList.add('hidden');
            switchView('main-view');
        } else {
            // Server rejected the credentials
            document.getElementById('login-error').classList.remove('hidden');
        }
    } catch (error) {
        console.error("Failed to connect to local server.");
    }
}
