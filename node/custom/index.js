const http = require("http");
const fs = require("fs");

const hostname = '127.0.0.1';
const port = 3001;

// Read the HTML files
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const services = fs.readFileSync('services.html');

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;  // Local variable for the requested URL

    console.log(url);  // Optional: Log the requested URL to the console
    
    res.statusCode = 200; // Default status code

    // Serve different content based on the requested URL
    if (url == '/') {
        res.end(home);  // Serve the home page
    } else if (url == '/about') {
        res.end(about);  // Serve the about page
    } else if (url == '/services') {
        res.end(services);  // Serve the services page
    } else if (url == '/contact') {
        res.end(contact);  // Serve the contact page
    } else {
        // If the URL is not recognized, return a 404 page
        res.statusCode = 404;
        res.end("<h1> 404 page not found </h1>");
    }

    // Set the content type header for all responses
    res.setHeader('content-type', 'text/html');
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
