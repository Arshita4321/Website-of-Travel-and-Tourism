const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Handle POST requests from the chat interface
app.post('/chat', (req, res) => {
    const message = req.body.message.toLowerCase();

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    
    const app = express();
    const PORT = process.env.PORT || 3000;
    
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, 'public')));
    
    app.post('/chat', (req, res) => {
        // Your chatbot logic here
    });
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
    


    let reply;
    if (message.includes('travel')) {
        reply = "For travel-related queries, please contact our support team at support@example.com";
    } else if (message.includes('payment')) {
        reply = "For payment-related queries, please visit our payment page at example.com/payment";
    } else if (message.includes('booking')) {
        reply = "For booking-related queries, please log in to your account and check your bookings.";
    } else {
        reply = "I'm sorry, I didn't understand your question. Could you please rephrase?";
    }

    res.json({ reply });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});