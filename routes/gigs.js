const express = require('express');
const router = express.Router();
const { db } = require('../config/database.js');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => {
    Gig.findAll()
    .then(gigs => {
        console.log(gigs)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

// Add a gig -- this is only because we want add the date to database
router.get('/add', (req, res) => {
    // This data ultimately come from, but now we hard-code that
    const data = {
        title: "Looking for a React developer",
        technologies: "react, javascript, html, css",
        budget: '$3000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus lorem, tincidunt sagittis consequat quis, feugiat vitae ligula. Mauris aliquam arcu nec fermentum maximus. Quisque ligula lorem, dapibus at mi sit amet, pulvinar ornare mauris. Donec id purus odio. Integer egestas tristique nulla, consequat consectetur nunc ullamcorper ac. Maecenas quis ligula eu neque molestie consectetur et quis elit.',
        contant_mail: 'user1@gmail.com'
    }
    let { title, technologies, budget, description, contant_mail} = data;
    // Insert into table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contant_mail
    })
    .then(Gig => res.redirect('/gigs'))
    .catch(err => console.log(err))
})

module.exports = router;