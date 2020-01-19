import React, { Component } from 'react';
import axios from 'axios';

import './storyboard-container.css';
import Storyboard from '../storyboard/storyboard';
import Form from '../form/form';

class StoryBoardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressActive: false,
        };
    }

    handleUrlSubmit = (url) => {
        this.setState({
            progressActive: true
        })


        // Send the URL to the backend
        axios.post('/get-storyboard', {
            url: url
        })
            .then(res => {
                console.log('backend response: ', res);
            })
            .catch(err => console.log(err));
    }


    render() {
        const { progressActive } = this.state
        return (
            <div className="storyboard-container">
                <h1 className="blue-text">Convert YouTube Video to Storyboard</h1>
                <Form
                    progressActive={progressActive}
                    handleUrlSubmit={this.handleUrlSubmit}
                />
                <Storyboard />

            </div>
        );
    };
};

export default StoryBoardContainer;