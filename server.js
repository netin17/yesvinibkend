const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the 'cors' package
const contactController = require('./controllers/ContactController');

const app = express();

// Use bodyParser middleware
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Endpoint to handle saving contact information
app.post('/save-contact', contactController.saveContact);

// Other routes and configurations...

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});