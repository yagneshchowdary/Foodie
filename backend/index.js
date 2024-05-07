const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const db = require('./db');
const stripe = require('stripe')('sk_test_51Og2k5SJ1n2baFXGp61kVPhMWWwrfDVWKOJM6WAkaMx12IcaJuj1ynqOm2b20HVLq5RhtmEPu9prZOUf4CMYI4Lb00tlRyTtq8')
db();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.post('/api/auth/payment', async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const lineItems = await Promise.all(data.map((prod) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: prod.name,
          images: [prod.img]
        },
        unit_amount: prod.price * 100,
      },
      quantity: prod.qty,
    })));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/fail",
    });
    console.log("session is :", session);
    res.json({ url: session.url, success: true });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).json({ error: "Failed to create session" });
  }
});
app.use('/api/auth', require('./Routes/Auth'));
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
