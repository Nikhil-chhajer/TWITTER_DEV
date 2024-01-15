import mongoose from 'mongoose';
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet cannot be more than 250 characters']
    },
},{timestamps:true});
//Tweet will be model and it will follow the schema of tweetSchema
const Tweet=mongoose.model('Tweet',tweetSchema);
export default Tweet;