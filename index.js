const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());

// Route utama
app.use('/users', usersRouter);

// Cek server jalan
app.get('/', (req, res) => {
  res.send('ERP Backend Running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
