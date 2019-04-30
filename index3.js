'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

app.post('/candidates', function(req, res) {
    if(!req.body.id || !req.body.name || !req.body.skills) {
        return res.status(200);
    }
  
});

app.get('/candidates/search', function(req, res) {
    if (!req.body.skills) {
        return res.status(404).send({
            success: 'false',
            message: 'no skills requested',
        })
    }
    return res.status(200).send({
        success: 'true',
        message: 'done successfully',
    })
});

app.listen(process.env.HTTP_PORT || 3000);