const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://yagneshsai111:yagnesh123@cluster0.xtufjx2.mongodb.net/foodiemern?retryWrites=true&w=majority';
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        const foodCollection = mongoose.connection.db.collection("fooditem");
        const categoryCollection = mongoose.connection.db.collection("foodCategory");

        global.foodData = await foodCollection.find({}).toArray();
        global.foodCatData = await categoryCollection.find({}).toArray();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        throw error;
    }
};
module.exports = connectDB;

