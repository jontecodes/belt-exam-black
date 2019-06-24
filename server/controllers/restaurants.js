var mongoose = require('mongoose');

require('../models/restaurant');
const Review = mongoose.model('Review');
const Rest = mongoose.model('Rest');

module.exports = {
    index: (req,res) => {
        Rest.find({},(err, results) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: results});
            }
        })
    },
    show: (req,res) => {
        Rest.findOne({_id: req.params.id}, (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', result: result});
            }
        })
    },
    create: (req,res) => {
        Rest.create(req.body, (err, results) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: results});
            }
        })
    },
    update: (req, res) => {
        Rest.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {runValidators: true}, (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else{
                res.json({message: 'Success', results: result});
            }
        })
    },
    createReiview: (req, res) => {
      console.log('This is it:',req.body);
        Review.create(req.body, (err, results) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                Rest.findOneAndUpdate({_id: req.params.id}, {$push: {reviews: results}}, (err, result) => {
                    if(err){
                        console.log('Failed adding Review to Restaurant!');
                        res.json({message: 'Failed', errors: err});
                    } else {
                        console.log('Successfully added a Review!');
                        res.json({message: 'Success', results: results});
                    }
                })
            }
        })
    },
    getReviews: (req, res) => {
        Review.find({_id: req.params.id}, null, {sort: 'rating'}, (err, results) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else {
                res.json({message: 'Success', results: results});
            }
        })
    },
    destroy: (req, res) => {
        Rest.remove({_id: req.params.id}, (err, result) => {
            if(err){
                res.json({message: 'Failed', errors: err});
            } else{
                res.json({message: 'Success', results: result});
            }
        })
    }
}