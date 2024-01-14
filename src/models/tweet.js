const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet cannot be more than 250 characters']
    },
    hashtags:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hashtag'
        }

    ]
},{timestamps:true});
//Tweet will be model and it will follow the schema of tweetSchema
const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet;