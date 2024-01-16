const mongoose = require('mongoose')
// mongo db url
mongoose.connect("mongodb+srv://rishabh:Rishabh22mongo@cluster0.9fh4uqd.mongodb.net/")

const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos',TodoSchema);

module.exports={
    todo
}


