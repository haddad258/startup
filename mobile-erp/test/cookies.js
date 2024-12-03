// ERPNext instance URL
const url = `http://192.168.100.82:9001/api/resource/Customer?fields=["*"]`; // Replace :doctype with your target doctype

// Session cookie retrieved from the login response
const sessionCookie = "sid=f8968e96d6ce30ae2770d51ed54a844a6eec9ff277ed0a12d8c9f790";

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
            console.log("Fetched Doctype Data:", data);
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
