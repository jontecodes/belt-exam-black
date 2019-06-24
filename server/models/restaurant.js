var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ReviewSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: [true, 'Please provide your name.'],
        minlength: [3, 'Your name must be at least 3 characters.']
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    description: {
        type: String,
        required: [true, 'Please give us a description of your review.'],
        minlength: [3, 'Description must be at least 3 characters']
    }
}, {timestamps: true});
var RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Restaurant name is required to add a Restaurant'],
        minlength: [3, 'Need more info ya puss!'],
    },
    cuisine: {
        type: String,
        minlength: [3, 'Try again'],
        required: [true, "Please provide the type of food for the given restaurant"]
    },
    reviews: [ReviewSchema]
}, {timestamps: true});

var Rest = mongoose.model('Rest', RestaurantSchema);
var Review = mongoose.model('Review', ReviewSchema);
// RestaurantSchema.plugin(uniqueValidator, {message: `{VALUE} already exist, please add a new Restaurant.`});