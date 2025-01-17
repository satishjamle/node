const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Signup Form</title>
    <link rel="stylesheet" href="styles.css">
</head>
<style>
/* Reset some default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and font styling */
body {
    font-family: 'Arial', sans-serif;
    background-color:rgb(53, 72, 179);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* Container to center the form */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

/* Form container styling */
.form-container {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

/* Form header */
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

/* Styling the form fields */
.input-group {
    margin-bottom: 15px;
}

.input-group label {
    font-size: 14px;
    color: #555;
    display: block;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.input-group input:focus {
    outline: none;
    border-color: #007BFF;
}

/* Submit button styling */
.submit-btn {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    border: none;
    color: white;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
}

.submit-btn:hover {
    background-color: #0056b3;
}

/* Footer with link */
p {
    text-align: center;
    margin-top: 20px;
}

p a {
    text-decoration: none;
    color: #007BFF;
}

p a:hover {
    text-decoration: underline;
}

/* Responsive styling */
@media (max-width: 600px) {
    .form-container {
        padding: 20px;
    }

    .input-group input {
        padding: 12px;
    }

    .submit-btn {
        padding: 12px;
    }
}

</style>

<body>
    <div class="container">
        <div class="form-container">
            <h2>Create an Account</h2>
            <form action="#" method="POST">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required>
                </div>
                <button type="submit" class="submit-btn">Sign Up</button>
            </form>
            <p>Already have an account? <a href="#">Login here</a></p>
        </div>
    </div>
</body>
</html>
`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
