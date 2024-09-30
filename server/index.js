const express = require('express');
const app = express()
const PORT = 3000;
const cors = require('cors');

// Basic CORS setup
app.use(cors());
// example items
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000'], // Allow specific origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    credentials: true, // Allow cookies to be sent
  };

const items = [
    {
        name: "laptop",
        price: 500
    },
    {
        name: "desktop",
        price: 700
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/items', (req, res) => {
    res.send(items);
  })

app.listen(PORT, () => {
  console.log(` listening on port http://localhost:${PORT}`)
})