// server.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, title: "Steam Key", price: 15, description: "Global Steam Activation Key." },
  { id: 2, title: "Discord Nitro", price: 10, description: "1 month Nitro subscription." }
];

let sales = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/sales', (req, res) => {
  const sale = req.body;
  sales.push(sale);
  console.log('New sale:', sale);
  res.json({ success: true });
});

app.get('/sales', (req, res) => {
  res.json(sales);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
