const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const pageVisitSchema = new Schema({
    user_agent:{
        type: String,
        trim: true
    },
  },
  {  timestamps: {
      createdAt: 'created_at'
     }
  },
)

const PageVisit = mongoose.model("PageVisit",pageVisitSchema)

module.exports =PageVisit
