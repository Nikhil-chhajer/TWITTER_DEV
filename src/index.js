import express from 'express';
import {connect} from './config/database.js'
// const Tweet=require('./models/tweet');
const app=express();
import TweetService from './services/tweet-service.js';
//const Comment =require('./models/commnet');
// const TweetRepository=require('./repository/tweet-repository');

app.listen(3000,async()=>{
    console.log(`server started`);
    await connect();
    console.log("MongoDB connected");
//    let repo=new HashtagRepository();
let service=new TweetService();
let tweet=await service.create({
    content:'this is #life #cyclic'
})

 console.log(tweet);
}) 