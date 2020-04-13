const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/api/users');

const app = express();

mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.log(err));

app.use('/users', userRoutes);

const port = process.env.PORT || 3030;
app.listen(port, console.log(`Server running on port ${port}`));