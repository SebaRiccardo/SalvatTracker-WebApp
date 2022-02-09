const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String
  },
  releaseDate: {
    type: Date
  },
  price: {
    type: Number
  },
  extrafees: {
    type: Number
  },
  ISBN: {
    type: Number
  },
  author: {
    type: String
  },
  description: {
    type: String
  },
  picture: {
    type: String
  },
  wasReleased: {
    type: Boolean,
    default: false
  },
  editorial: {
    type: String
  },
  romanNumber: {
    type: String
  }
});

const Book = mongoose.model("Book",bookSchema)


module.exports=  Book
