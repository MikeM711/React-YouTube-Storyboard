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

        const time = 5
        const transcript = dummyData.data

        const userDefinedTranscript = buildUserDefinedTranscript(transcript, time)
        console.log(userDefinedTranscript)

        const completeStoryboard = userDefinedTranscript.map(sequence => {
            return (
                <SingleFrameSequence
                    key={sequence.id}
                    text={sequence.text}
                    start={sequence.start}
                    end={sequence.end}
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