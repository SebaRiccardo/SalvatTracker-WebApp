const express = require('express');
const router = express.Router();
const data = require('../booksData.json')

/* GET home page. */
router.get('/', function(req, res, next) {

     let  booksList = data

     console.log("| Index page REQUESTED")
     res.render('index', { list: booksList});
});

module.exports = router;
