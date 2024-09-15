Object.keys(require.cache).forEach(function(key) { delete require.cache[key] })

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const workshopCardRoutes = require('./routes/workshopCardRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose.connect("mongodb+srv://hasby:firstUser@cluster2.eifc1.mongodb.net/GARAGE-MANAGEMENT-SYSTEM?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/workshop-cards', workshopCardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// console.log(process.env.MONGODB_URI)