const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server is running on port 3000');
});

app.use(express.json());
app.use(require('./router/authRouter'))
app.use(require('./router/productRouter'))
