import React, { Component } from 'react';

import './storyboard.css';

class Storyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }

    render() {
        return (
            <div className="storyboard">
                <p>Storyboard Component</p>
            </div>
        );
    };
};

export default Storyboard;