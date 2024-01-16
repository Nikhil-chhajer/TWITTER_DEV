import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js'

import TweetService from './services/tweet-service.js';
import LikeService from './services/like-service.js';
import apiRoutes from './routes/index.js';
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);
import {TweetRepository, UserRepository} from './repository/index.js'
app.listen(3000,async()=>{
    console.log(`server started`);
    await connect();
    console.log("MongoDB connected");
  const userRepo=new UserRepository();
  const tweetRepo=new TweetRepository();
  const tweets=await tweetRepo.getAll(0,10);
  const user=await userRepo.getAll();
  const likeService=new LikeService();
  await likeService.toggleLike(tweets[0].id,'Tweet',user[0].id);

})   