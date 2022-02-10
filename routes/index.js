const express = require('express');
const router = express.Router();
const Book = require("../models/Book")
const PageVisit = require("../models/PageVisit")

router.get('/', async function(req, res, next) {

     const allBooks = await Book.find({price:0}).sort({releasedOrder:1}).lean()
     await PageVisit.create({user_agent:req.headers['user-agent']})
     console.log("Visit Saved: ",req.headers['user-agent'])
     res.render('index', { data: { books: allBooks , messageSent: false }});
});

module.exports = router;
