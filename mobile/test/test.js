// ERPNext instance URL
const url = 'http://192.168.100.82:9001/api/method/login';

// Login credentials
const loginData = {
    usr: "admin@mail.com",
    pwd: "98263574"
};

// Function to login
async function loginToERPNext() {
    try {
        // Make the POST request
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(loginData).toString()
        });

        // Check if the login was successful
        if (response.ok) {
            console.log("Login successful!",response.headers);

            // Retrieve and log cookies for session management
            const cookies = response.headers.get("set-cookie");
            console.log("Session cookies:", typeof cookies);

            // Use these cookies for subsequent API calls
        } else {
            const errorText = await response.text();
            console.error("Login failed:", response.status, errorText);
        }
    } catch (error) {
        console.error("Error occurred during login:", error);
    }
}

// Call the login function
loginToERPNext();
