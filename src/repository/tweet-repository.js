import CrudRepository from './crud-repository.js';
import Tweet from'../models/tweet.js';
class TweetRepository extends CrudRepository{
    constructor(){
        super(Tweet);
    }
    async create(data){
        try {
            console.log(data);
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async getWithComments (id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'comments'}).lean();
          //populate will help us to populate comment with tweet 
          //by using lean() we wil get java script object rather than mongoose object
            return tweet;
        } catch (error) {
            console.log(error);
        }

    }
    // async update(tweetId,data){
    //     try {
    //         const tweet=await Tweet.findByIdAndUpdate(tweetId,data,{new:true});
    //         //new:true this will fetch us the latest updated tweet not previous one.
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
        
    // }
    async getAll(offset,limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    //offset and limit used for pagination 
    //if we set offset=2, and limit =4 then we will get DB entry starting from 2 and total no of entries shown will be 4
    async find(id){
        try {
            const tweet =await Tweet.findById(id).populate({path:'likes'});
            return tweet;
            
        } catch (error) {
            console.log(error);
        }
    }



}


export default TweetRepository;
