const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
const NewsRoute = require('./Routes/NewsRoute');
const UserRoute = require('./Routes/UserRoute')
const cors = require('cors');
const FormRoute = require('./Routes/FormRoute')


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/news",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
})
.then(()=>{
    console.log('your db is connected successfully');
}).catch(()=>{
    console.error('your connection is unsuccessfully')
})

app.use(NewsRoute);
app.use(UserRoute);
app.use(FormRoute);

const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=>{
    console.log(`SERVER IS WATCH ON ${9000}`)
})