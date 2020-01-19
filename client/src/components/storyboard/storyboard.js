import React, { Component } from 'react';

import './storyboard.css';
import dummyData from '../../dummy-data/dummy-data';
import buildUserDefinedTranscript from '../../utils/build-transcript-sequences'
import SingleFrameSequence from './single-frame-sequence/single-frame-sequence';

class Storyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }
    
    render() {

        // time and image width ill be user-defined
        const time = 5
        const width = 800

        const transcript = dummyData.data

        const userDefinedTranscript = buildUserDefinedTranscript(transcript, time)
        console.log(userDefinedTranscript)

        const completeStoryboard = userDefinedTranscript.map(sequence => {
            // Edge case: we don't have images that are all 0's
            if (sequence.start === 0) {
                sequence.start = 1
            }
            return (
                <SingleFrameSequence
                    key={sequence.id}
                    text={sequence.text}
                    start={sequence.start}
                    end={sequence.end}
                    width={width}
                />
            )
        })
        
        return (
            <div className="storyboard">
                <p>Storyboard Component</p>
                {completeStoryboard}
            </div>
        );
    };
};

export default Storyboard;