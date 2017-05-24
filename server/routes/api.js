const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://usermara:cjsgk1234567890@ds149501.mlab.com:49501/mgd_videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if(err) {
            console.log("Error retrieving videos");
        } else {
            res.json(videos);
        }
    });
});

router.get('/videos/:id', function(req, res){
    console.log('Get request for single videos');
    Video.findById(req.params.id)
    .exec(function(err, video){
        if(err) {
            console.log("Error retrieving videos");
        } else {
            res.json(video);
        }
    });
});

router.post('/video', function(req, res) {
    console.log('Post a Video');
    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save(function(err, insertedVideo){
        if(err) {
            console.log('Error saving video');
        } else {
            res.json(insertedVideo);
        }
    });
});

router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id, {
       $set: {title: req.body.title, url: req.body.url, description: req.body.description} 
    },
    {
        new: true
    },
    function(err, updatedVideo) {
        if(err) {
            res.send('Err updating video');
        } else {
            res.json(updatedVideo);
        }
    });
});

router.delete('/video/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err) {
            res.send("Error deleting video");
        } else {
            res.json(deletedVideo);
        }
    });
});

module.exports = router;