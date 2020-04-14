const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const userRoutes = require('./routes/api/users');
const profileRoutes = require('./routes/api/profile');

const app = express();

mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log("MongoDB Connected..."))
        .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(passport.initialize()); //passport 초기화
require('./config/passport')(passport);

app.use('/users', userRoutes);
app.use('/profile', profileRoutes);

const port = process.env.PORT || 3030;
app.listen(port, console.log(`Server running on port ${port}`));