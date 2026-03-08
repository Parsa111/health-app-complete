const express = require('express');
const stripe = require('stripe');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const app = express();
const stripeInstance = stripe(process.env.VITE_STRIPE_SECRET_KEY);
const BOOKINGS_FILE = path.join(__dirname, 'bookings.json');

// Helper to read bookings
const readBookings = () => {
    if (!fs.existsSync(BOOKINGS_FILE)) return [];
    try {
        const data = fs.readFileSync(BOOKINGS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
};

// Helper to save bookings
const saveBookings = (bookings) => {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
};

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { amount, bookingData } = req.body;

    try {
        // Convert amount to cents for Stripe (e.g., "150.00" -> 15000)
        const amountCents = Math.round(parseFloat(amount.replace(/[^\d.]/g, '')) * 100);

        console.log(`Creating PaymentIntent for ${bookingData.email} amount: ${amountCents}`);

        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: amountCents,
            currency: 'cad',
            receipt_email: bookingData.email,
            metadata: {
                customer_name: bookingData.name,
                customer_email: bookingData.email,
                package: bookingData.package,
                date: bookingData.date,
                time: bookingData.time
            },
            automatic_payment_methods: {
                enabled: true,
            },
        });

        console.log(`PaymentIntent created: ${paymentIntent.id}`);

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        res.status(500).send({ error: error.message });
    }
});

app.get('/bookings', (req, res) => {
    const bookings = readBookings();
    res.send(bookings);
});

app.post('/confirm-booking', (req, res) => {
    const { booking } = req.body;
    const bookings = readBookings();
    
    // Check if slot is already taken (to be safe)
    const isTaken = bookings.find(b => b.date === booking.date && b.time === booking.time);
    if (isTaken) {
        return res.status(400).send({ error: "This slot is already booked." });
    }

    bookings.push(booking);
    saveBookings(bookings);
    res.send({ success: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
