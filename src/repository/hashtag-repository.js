const Hashtag=require('../models/hashtags');
class HashtagRepository{
    async create(data){
        try {
            const tag=await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id){
        try {
            const tag=await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
  
 async bulkCreate(data){
    try {
    
        const tags=await Hashtag.insertMany(data);
        return tags;

    } catch (error) {
           console.log(error);
    }

 }
    async delete(id){
        try {
            const tweet=await Hashtag.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll(offset,limit){
        try {
            const tweet=await Hashtag.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(titleList){
        try {
            const tags=await Hashtag.find({
                title:titleList
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
        

    }
}
module.exports=HashtagRepository;