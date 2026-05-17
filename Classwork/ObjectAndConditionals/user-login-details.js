const login = {username: "admin", password: "1234"};

const status = login.username === "admin" && login.password === "1234" ? "Login Success" : "Invalid credentials";

console.log(status);
