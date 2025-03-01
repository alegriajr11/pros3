function login(username, password) {
    // Simulate a login process
    if (username === "admin" && password === "password123") {
        return "Login successful!";
    } else {
        return "Invalid username or password.";
    }
}

// Example usage
console.log(login("admin", "password123")); // Output: Login successful!
console.log(login("user", "wrongpassword")); // Output: Invalid username or password.