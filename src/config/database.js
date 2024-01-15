import mongoose from 'mongoose';
export const connect=async()=>{
// Instead of using 'localhost', use '127.0.0.1'

await mongoose.connect('mongodb://127.0.0.1:27017/twitter_Dev');

}
