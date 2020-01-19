const express = require('express');
const deleteData = require('../../utils').deleteData;
const downloadVideo = require('../../utils').createData.downloadYouTubeVideo
const convertFrames = require('../../utils').createData.convertVideoToFrames
const createTranscript = require('../../utils').createTranscript;
const prettyifyTranscript = require('../../utils').prettyifyTranscript;

/*

5 seconds
https://www.youtube.com/watch?v=oEDFkc6k8vU

https://www.youtube.com/watch?v=6e-sCFZlM1s

Sentdex
https://www.youtube.com/watch?v=xVAbW1G64bM&list=PLQVvvaa0QuDeA05ZouE4OzDYLHY-XH-Nd&index=9

*/

const router = express.Router();

router.post('/get-storyboard', (req, res) => {

	(async function getStoryboard(req, res, ) {
		const youtubeLink = req.body.url;
		console.log("backend received the url:", youtubeLink);

		await deleteData();
		console.log('\t#2 Creating YouTube video')
		await downloadVideo(youtubeLink);
		console.log('\t#3: Convert to frames')
		await convertFrames();
		await createTranscript(youtubeLink);
		let transcript = await prettyifyTranscript()
		console.log('\t#5: Send backend response')
		console.log('sending response now')
		res.status(200).json({ data: transcript });
	})(req, res)
});

module.exports = router;