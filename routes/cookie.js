const express = require('express');

const router = express.Router();

/* GET /cookie */
router.get('/', function(req, res) {
    // Verify that sessionId cookie was set
    if (req.cookies['sessionId'] === undefined) {
        // The cookie was not set, the user's browser has cookies disabled
        res.send('Please enable cookies');
    } else {
        // The cookie was set, redirect them to the welcome page
        res.redirect('/welcome');
    }
});

module.exports = router;
