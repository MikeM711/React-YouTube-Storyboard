const express = require('express');
// utils

const router = express.Router();

router.post('/get-storyboard', (req, res) => {
	const youtubeLink = req.body.url;
	console.log("backend received the url:", youtubeLink)

	console.log('hit post request')
	res.status(200).json({ data: youtubeLink });
});

module.exports = router;