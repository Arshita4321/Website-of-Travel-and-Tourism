// mkdir chatbot
// cd chatbot
// npm init -y
// npm install express body-parser

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle POST requests from the chat interface
app.post('/chat', (req, res) => {
    // Your chatbot logic here
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// // Handle POST requests from the chat interface
// app.post('/chat', (req, res) => {
//     const message = req.body.message.toLowerCase();

//     let reply;
//     if (message.includes('payment')) {
//         reply = "For payment related queries, please contact our support team at support@example.com";
//     } else if (message.includes('booking')) {
//         reply = "You can view and manage your bookings in the 'My Bookings' section of the app.";
//     } else if (message.includes('app') || message.includes('working')) {
//         reply = "Our app is designed to provide a seamless experience. If you encounter any issues, please let us know.";
//     } else {
//         reply = "I'm sorry, I didn't understand your question. Could you please rephrase?";
//     }

//     res.json({ reply });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });










/*             json

{
    "message": "How can I make a payment?"
}

{
    "reply": "For payment related queries, please contact our support team at support@example.com"
}

*/