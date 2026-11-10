// Import the express library and built-in path module
import express from 'express'

// 2. Create an instance of an Express application
const app = express()

// 3. Define the port the server will run on
const port = 3000;

app.get('/', (req, res) => {
    res.send("☕ The Daily Grind server is awake!")
})

app.listen(port, () => {
    console.log(`☕ The Daily Grind server is running at http://localhost:${port}`);
});