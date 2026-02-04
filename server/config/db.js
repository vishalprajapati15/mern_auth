import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/mern_auth`)
            .then(() => console.log('DB Connected Succesfully !!'));

    } catch (error) {
        console.log('DB connection error : ', error);
    }
}

export default connectDB;
