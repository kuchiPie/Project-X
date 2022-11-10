import mongoose from 'mongoose';
function connectDB(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/Project-X-API',
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error);
    }
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Connect to DB successful!');
    });
}

export default connectDB;