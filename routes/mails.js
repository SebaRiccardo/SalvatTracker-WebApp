const express = require('express');
const router = express.Router();
const config = require("../config/index")
const EmailService = require("../services/Email/EmailService");
const Book = require('../models/Book')


router.post('/send', async function(req, res, next) {

   const emailService = new EmailService()
   var data={
      email: config.mail.user,
      subject: "Mensaje desde la pagina Collection Tracker",
      payload:{
          writer: req.body.writer,
          message: req.body.message,
      },
      template: "services/Email/message.handlebars",
  }
  try {
    const allBooks = await Book.find().sort({releasedOrder:1}).lean()
    emailService.sendEmail(data).then(
      async (result)=>{
      console.log("Sent: " + result.enviado)
      console.log("Rejected: " + result.rechazado)
      res.render('index', { data: { books: allBooks , messageSent: true }});
    })

  }
  catch(error){
     console.log(error)
    res.render('index', { data: { books: allBooks , messageSent: false }});
  }


});

module.exports = router;
