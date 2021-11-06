import db from 'mongoose';

// dotenv for environment variables
import dotenv from 'dotenv';
dotenv.config();

db.Promise = global.Promise;
async function connectToDB() {
    try {
        await db.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

export default connectToDB;