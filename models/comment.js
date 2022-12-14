const mongoose = require ('mongoose')

let commentSchema = new mongoose.Schema({
    author:{type: String, default: 'Anonymous'},
    rant:{type: String},
    stars:{type: Number, required: true},
    content:{type: String, defauly:''}
})

module.exports = mongoose.model('Comment', commentSchema)
