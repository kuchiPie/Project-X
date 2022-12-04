import mongoose from 'mongoose';
function connectDB (){
    try {
        // console.log(process.env.MONGO_URI)
        mongoose.connect(process.env.MONGO_URI,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error);
    }
    // var student = new Student;

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
      console.log('[INFO] Connect to DB successful!');
    });
}

export default connectDB;