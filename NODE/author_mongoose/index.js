const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB...')
  app.listen(PORT, () => console.log('Server is running on port 3000...'));
});

app.use('/author', require('./router/authorRouter'));