import React, { Component } from 'react';

import './single-frame-sequence.css';

class SingleFrameSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '',
        };
    }

    

    render() {
        const { text, start, end} = this.props

        const pad = (num, size) => {
            var s = "0000000" + num;
            return s.substr(s.length-size);
        }
        
        // image = image + "/img00001.jpg"
        // let imageNum = pad(start,5)
        // let imagePath = `../../../data/img${imageNum}.jpg`
        // let imagePath = "../../../data/img00001.jpg"
        // console.log(window.location.origin + '../' )
        return (
            <div className="storyboard-frame-sequence">
                {/* <img src={window.location.origin + '/img00001.jpg'} alt=""></img> */}
                <p>{text}, start: {start}, end: {end}</p>
            </div>
        );
    };
};

export default SingleFrameSequence;