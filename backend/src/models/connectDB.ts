import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const connectDb = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL environment variable is not defined");
        }
        const database = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB at ${database.connection.host}:${database.connection.port}`);
    } catch (error) {
        console.error("Failed to connect to the database", error);
        process.exit(1); // Exit the process with an error code
    }
};

mongoose.connection.on('error', (err)=>{
    console.log(err.message)
})

mongoose.connection.on('disconnected', () =>{
    console.log()
    console.log('Mongoose disconnected')
})

process.on('SIGNINT', async ()=>{
    await mongoose.connection.close()
    process.exit(0)
})

export default connectDb;

