import { CommentRepository,TweetRepository } from "../repository/index.js";
class CommentService{
    constructor(){
        this.commentRepo=new CommentRepository();
        this.tweetRepo=new TweetRepository()
    }
    async create(modelId,modelType,userId,content){
        console.log(modelId,modelType,userId,content);
        if(modelType=='Tweet'){
            var commentable=await this.tweetRepo.get(modelId);
    
        }
        else if(modelType=='Comment'){
            var commentable=await this.commentRepo.get(modelId);
        }
        else{
            throw new Error('unknown model type');
        }
        const comment=await this.commentRepo.create({
        content:content,
        user:userId,
        onModel:modelType,
        commentable:modelId,
        comments:[]
        });
        commentable.comments.push(comment);
        await commentable.save();
    }    
}
export default CommentService;