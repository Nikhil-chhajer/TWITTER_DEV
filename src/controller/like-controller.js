import LikeService from "../services/like-service.js";
const likeservice=new LikeService();
export const toggleLike=async (req,res)=>{
    try {
        const response=await likeservice.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(201).json({
            success:true,
            message:"Successfully togggled like ",
            data:response,
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error
        })
        
    }
}
