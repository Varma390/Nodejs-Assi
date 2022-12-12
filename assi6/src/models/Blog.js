const mongooose = require('mongoose');


const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: {type: String},
    // description: {type: String},
    // posted_at: {type: String},
    // posted_by: {type: String, required:true}
})


const Blog1 = mongooose.model('blog1', blogSchema);
Blog1.createCollection();

module.exports = {Blog1};

