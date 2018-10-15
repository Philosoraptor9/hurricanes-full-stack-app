const express = require('express');
const router = express.Router();

const Storms = require('../models/storms');

// Index Route: Shows all the storms
router.get('/', (req, res) => {
    Storms.find({}, (err, foundStorms) =>{
        console.log(foundStorms);
        res.render('index.ejs', {hurricanes: foundStorms});
    }) 
});

// New Route: Add a new storm
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

// Show Route: Shows a single storm
router.get('/:id', (req, res) => {
    console.log(req.params);
    Storms.findById(req.params.id, (err, foundStorms) =>{
        console.log(foundStorms, ' foundStorms')
        res.render('show.ejs', {
            hurricanes: foundStorms
        });
    });
});

// Edit Route: Edit an existing storm
router.get('/:id/edit', (req, res) => {
    Storms.findById(req.params.id, (err, foundStorms) =>{
        console.log(foundStorms, ' foundStorms')
        res.render('edit.ejs', {
            hurricanes: foundStorms
        });
    });
});

// Delete Route: delete a storm from the 


module.exports = router;