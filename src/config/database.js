const mongoose=require('mongoose');
const connect=async()=>{
// Instead of using 'localhost', use '127.0.0.1'

mongoose.connect('mongodb://127.0.0.1:27017/twitter_Dev');

}
module.exports=connect;