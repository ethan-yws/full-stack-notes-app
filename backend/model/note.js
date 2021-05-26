const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// Mongoose has a special way of exporting models utilizing mongoose.model()
// that takes two properties:
// ‘Subscriber’ is the name we want to give the model in our database and
// then the next one is the schema that corresponds to that model
// which is our subscriberSchema.
module.exports = mongoose.model("Note", noteSchema);
