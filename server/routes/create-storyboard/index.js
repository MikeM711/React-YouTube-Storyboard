const express = require('express');
// utils

const router = express.Router();

router.post('/get-storyboard', (req, res) => {
    //   const youtubeLink = req.body.url;
    console.log('hit post request')
    res.status(200).json({ data: "response from /get-storyboard get request"});
  });

module.exports = router;