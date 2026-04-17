const mongoose = require('mongoose');

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    const localUri = 'mongodb://localhost:27017/notes-app';

    try {
        const connectionUri = uri || localUri;
        await mongoose.connect(connectionUri);
        console.log(`Connected to MongoDB: ${uri ? 'Atlas' : 'Local'}`);
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
