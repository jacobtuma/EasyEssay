
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TopicSchema = new Schema({
    Topic: String,
    Category: String,
    Description: String,
    Main_Facts: Array,
    SubCategories:  [ {
        name: String,
        facts: Array,
        link: String } ]

});

TopicSchema.method({});

TopicSchema.statics = {
    list() {
        return this.find().exec();
    }
};


export default mongoose.model("Topic", TopicSchema);
