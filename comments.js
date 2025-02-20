// Create web server
// 1. Import module http
const http = require('http');
// 2. Create server
const server = http.createServer((req, res) => {
    res.end('Hello World');
});
// 3. Listen on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// 4. Run server using node comments.js
// 5. Open browser and go to localhost:3000
// 6. You will see Hello World in the browser