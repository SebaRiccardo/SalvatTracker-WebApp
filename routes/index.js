var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const booksList =[
    {
     title:"La Isla del Tesoro",
     releaseDate: new Date().getDate(),
     price: 200,
     ISBN: 9788447148578,
     author:"Robert Louis Stevenson",
     description:"La isla del tesoro (Treasure Island) es una novela de aventuras escrita por el escocés Robert Louis Stevenson, " +
       "publicada en libro en Londres en 1883 (publicada originalmente por entregas en la revista infantil Young Folks, " +
       "entre 1881 y 1882 con el título de The Sea Cook, or Treasure Island).",
     picture: "/assets/img/covers/isladeltesoro.png"
    },
    {
      title:"",
      releaseDate:"" ,
      price:"" ,
      ISBN: "",
      author:"",
      description:"",
      picture:""
    },

  ]
  res.render('index', { list: booksList});
});

module.exports = router;
