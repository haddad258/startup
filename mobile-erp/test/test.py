import requests

# ERPNext instance URL
url = "http://192.168.1.1:9001/api/method/login"

# Login credentials
login_data = {
    "usr": "your_email_or_username",
    "pwd": "your_password"
}

# Make the POST request
response = requests.post(url, data=login_data)

# Check the response
if response.status_code == 200 and 'message' in response.json():
    print("Login successful!")
    # Cookies are returned for session management
    cookies = response.cookies
    print("Session cookies:", cookies)
else:
    print("Login failed:", response.status_code, response.text)
