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

//Funcion de registro
function register(username, password) {
    // Simulate a registration process
    if (username && password) {
        return "Registration successful!";
    } else {
        return "Please provide a valid username and password.";
    }
}

// Example usage
console.log(register("newuser", "newpassword")); // Output: Registration successful!
console.log(register("", "")); // Output: Please provide a valid username and password.