import React, { Component } from 'react';

import './video-submission.css';
import Storyboard from '../storyboard/storyboard';

class VideoSubmission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }

    render() {
        return (
            <div className="video-submission">
                <p>Video Submission Component</p>
                <Storyboard/>
            </div>
        );
    };
};

export default VideoSubmission;