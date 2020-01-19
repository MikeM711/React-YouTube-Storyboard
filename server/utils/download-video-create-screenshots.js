const fs = require('fs');
const ytdl = require('ytdl-core');

// splitting to frames
let spawn = require('child_process').spawn

const downloadYouTubeVideo = (url) => {
  return new Promise((resolve, reject) => {
    // download the video
    let writeStream = ytdl(url).pipe(fs.createWriteStream('client/data/video.mp4'));
    writeStream.on('open', (data) => {
      console.log("Downloading video before converting to frames.")
    })
    writeStream.on('close', () => {
      console.log('convert to frames now')
      resolve();
    })
  });
}

// as long as the video is available, we can cut frames
const convertVideoToFrames = () => {
  return new Promise((resolve, reject) => {
    console.log('we are inside the promise of converting video to frames')
    // let options = getOptions()
    let options = {
      videoName: "video",
      imgFileName: "img",
      fps: 1
    }
    // the below creates the frames
    let ffmpegVideoFrameProcess = spawn('ffmpeg', [
      '-i', `client/data/${options.videoName}.mp4`,
      '-f', 'image2',
      '-bt', '20M',
      '-vf', `fps=${options.fps}`,
      `client/data/${options.imgFileName}%05d.jpg`
    ])

    ffmpegVideoFrameProcess.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    ffmpegVideoFrameProcess.stderr.on('data', (err) => {
      // console.log(err.toString());
    });

    ffmpegVideoFrameProcess.stdout.on('close', (data) => {
      console.log('\t#4: hey there we are done with this closing thing')
      resolve()
    });

    // ffmpegVideoFrameProcess.stdout.on('close', resolve())

  });
}

module.exports = {downloadYouTubeVideo, convertVideoToFrames}