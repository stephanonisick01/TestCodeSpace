// Create a basic HTML structure
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello GitHub Codespaces!!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Hello, GitHub Codespaces!</h1>
</body>
</html>
`;

// Write the HTML content to a file
const fs = require('fs');
fs.writeFileSync('index.html', htmlContent);

console.log('index.html file has been created. Open it in your browser to see the result.');
