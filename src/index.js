const express=require('express');
const connect=require('./config/database');
// const Tweet=require('./models/tweet');
const app=express();
const TweetService=require('./services/tweet-service')
//const Comment =require('./models/commnet');
// const TweetRepository=require('./repository/tweet-repository');
const HashtagRepository=require('./repository/hashtag-repository');
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