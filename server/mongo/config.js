const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://carrot:Misora01@cluster0.5rjsg.mongodb.net/vue-shop?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}); // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose
