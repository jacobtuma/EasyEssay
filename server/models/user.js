import mongoose from 'mongoose'
var Schema = mongoose.Schema;


// User Schema
var UserSchema = new Schema({
    username: {
        type: String,
        index:true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});

export default mongoose.model('User', UserSchema);



