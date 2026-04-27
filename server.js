const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies from webhooks
app.use(express.static('public')); // Serves your landing page files

// The "Sentinel" Webhook Route (Placeholder)
app.post('/api/webhooks/payment-failure', (req, res) => {
    const paymentData = req.body;
    console.log('Payment issue detected for:', paymentData.user);
    res.status(200).send('Webhook received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Cubrin server running on http://localhost:${PORT}`);
});
