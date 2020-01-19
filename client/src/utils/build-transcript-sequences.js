module.exports = (transcript, time) => {
    // First, clean the array so that we do 5+ second chunks (or any user-defined amount of time)
    let storyboardOutline = [];
    let beginningSequenceTime;
    let sequenceText;
    let id = 0;

    for (let i = 0; i < transcript.length; i++) {
        // initializing transcript
        if (i === 0) {
            beginningSequenceTime = transcript[i].start;;
            sequenceText = transcript[i].text;
            continue;
        }

        // for the case where the time of this caption - previous sequence time is LESS than the desired time: this means we would like more time to flesh out this sequence
        if (transcript[i].start - beginningSequenceTime < time) {
            sequenceText = sequenceText + " " + transcript[i].text
        } else {
            // If the sequence is equal or greater than the desired time: we woud like to make a storyboard sequence out of this
            let storyboardSeq = {
                text: sequenceText,
                start: beginningSequenceTime,
                end: transcript[i].start,
                id: id
            };
            storyboardOutline.push(storyboardSeq);

            // We will set up for the next sequence
            sequenceText = transcript[i].text;
            beginningSequenceTime = transcript[i].start
            id++
        }

        // console.log(transcript[i])
    }

    // add last bit of transcript
    let storyboardSeq = {
        text: sequenceText,
        start: beginningSequenceTime,
        end: "end",
        id: id
    };
    storyboardOutline.push(storyboardSeq);
    return storyboardOutline
}