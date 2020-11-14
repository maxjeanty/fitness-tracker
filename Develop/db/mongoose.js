const mongoose = require('mongoose');

const databaseUrl = 'max1';

mongoose.connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${databaseUrl}`);
 

