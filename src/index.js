const express=require('express');
const connect=require('./config/database');
// const Tweet=require('./models/tweet');
const app=express();
const TweetService=require('./services/tweet-service')
//const Comment =require('./models/commnet');
// const TweetRepository=require('./repository/tweet-repository');
app.listen(3000,async()=>{
    console.log(`server started`);
    await connect();
    console.log("MongoDB connected");
    let service=new TweetService();
    const tweet=await service.create({
        content:'my #working #twitter'
    });
    console.log(tweet);
}) 