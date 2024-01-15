import express from 'express';
import {connect} from './config/database.js'

const app=express();
import TweetService from './services/tweet-service.js';


app.listen(3000,async()=>{
    console.log(`server started`);
    await connect();
    console.log("MongoDB connected");
let service=new TweetService();
let tweet=await service.create({
    content:'this is #LIFE'
})

 console.log(tweet);
}) 