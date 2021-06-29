const express = require('express');

const router = express();
const NewsController = require('../Controllers/NewsController');



router.post("/create", NewsController.addnews); 

router.get("/news/:id", NewsController.getNoteById);


// router.route("/getnews").get((req,res)=>{
//     Addnews.find()
//                .then(foundAddnews => res.json(foundAddnews))
//   }) 

// router.get("/user/:userId", NewsController.getNewsByUserId);


module.exports = router;