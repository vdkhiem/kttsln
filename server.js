const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Init middleware
app.use(express.json({ extended: false })); // "extended: false" allow to log req.body

app.get('/', (req, res) => res.send('API is running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/customers', require('./routes/api/customers'));

const PORT = process.env.PORT || 5481;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
