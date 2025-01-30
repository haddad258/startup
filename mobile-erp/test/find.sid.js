// ERPNext instance URL
const url = `http://192.168.100.82:9001/api/resource/Customer`; // Replace :doctype with your target doctype

// Session cookie retrieved from the login response
const sessionCookie = "sid=12e6d96b4b4fc683f51b81bcd0b54605ade0c30d750ccc085bdc8065";

// Function to fetch a resource using the session cookie
async function fetchDoctypeResource() {
    try {
        // Make the GET request with the session cookie
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cookie": sessionCookie
            }
        });

        // Handle the response
        if (response.ok) {
            const data = await response.json();
        } else {
            const errorText = await response.text();
            console.error("Failed to fetch data:", response.status, errorText);
        }
    } catch (error) {
        console.error("Error occurred during fetch:", error);
    }
}

// Call the function
fetchDoctypeResource();
