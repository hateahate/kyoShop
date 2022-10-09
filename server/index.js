// Enable dotenv
require('dotenv').config();

// Import cors
const cors = require('cors');

// Import routes
const router = require('./routes/index');

// Connect express for dotenv
const express = require('express');

// Static (img) path
const path = require('path');

// DB models import
const models = require('./models/models');

// Connect file uploader
const fileUpload = require('express-fileupload');

// Import database credentials
const sequelize = require('./db');

// Error handler import
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

// Email sender

const mailTransport = require('./middleware/mailSenderMiddleware');

// Getting port from config
const PORT = process.env.PORT || 5000;

// Init
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);
app.use(mailTransport);




// Run
const start = async () => {
    console.log('kyoServer starting...');
    try {
        await sequelize.authenticate(); // DB auth
        await sequelize.sync(); // Data and tables sync
        console.log('kyoServer connected to database');
        app.listen(PORT, () => console.log('kyoServer started on port ' + PORT));
        mailTransport({
            from: '"Fred Foo 👻" <mailtransport@vitaforest.kz>', // sender address
            to: "stepanpavlenko@icloud.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        })
    }
    catch (e) {
        console.log('kyoServer critical error: ' + e);
    }
}
start();