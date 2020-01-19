var fs = require('fs');

const getPrettyTranscript = () => {
    return new Promise((resolve, reject) => {

        function transcriptInfo(text, start) {
            this.text = text,
                this.start = start
            // this.duration = duration
            // this.end = start + duration
        }
        // ../data/captions.txt
        var textByLine = fs.readFileSync("client/data/captions.txt").toString().split("\n");
        var completeTranscript = []
        var textBlob = textByLine.join('')
        var transcript = "<transcript>"
        var indexOfTranscript = textBlob.indexOf(transcript)
        textBlob = textBlob.slice(indexOfTranscript + transcript.length)

        var textArrayBlob = textBlob.split('</text>')

        for (let i = 0; i < textArrayBlob.length - 1; i++) {
            // console.log(textArrayBlob[i])

            var timeTextIdx = textArrayBlob[i].indexOf('>')
            var timeInfo = textArrayBlob[i].slice(0, timeTextIdx).split(" ")
            timeInfo.shift() // first array item is useuless

            // get text
            var text = textArrayBlob[i].slice(timeTextIdx + 1)
            while (text.indexOf("&amp;#39;") !== -1) {
                text = text.replace("&amp;#39;", "'")
            }

            // "start" structure: 'start="#####.#"'
            var start = timeInfo[0]

            // "start" structure: 'start="#####.#"'
            var startQuoteIdx = start.indexOf("\"")
            start = start.slice(startQuoteIdx + 1)
            start = start.slice(0, start.length - 1)
            // console.log('start: ', start)

            // start will be whole number
            start = Math.floor(Number(start))

            var transcriptLine = new transcriptInfo(text, start)

            completeTranscript.push(transcriptLine)

        }

        // return completeTranscript
        resolve(completeTranscript)
    });
}

module.exports = getPrettyTranscript
