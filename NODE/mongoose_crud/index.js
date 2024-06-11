const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3001;
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use('/product', require('./router/productRouter'))