import mongoose from 'mongoose';
function connectDB(){
    try {
        mongoose.connect('mongodb+srv://projectx:projectx@cluster0.qnuohoz.mongodb.net/?retryWrites=true&w=majority',
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