import React, { Component } from 'react';

import './single-frame-sequence.css';
// import firstImg from '../../../data/img00001.jpg'

class SingleFrameSequence extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: '',
        };
    }

    

    render() {
        const { text, start, end, width} = this.props

        const pad = (num, size) => {
            var s = "0000000" + num;
            return s.substr(s.length-size);
        }
        
        let imageNum = pad(start,5)
        let path = '../../../data/img00001.jpg'
        let imageNumber = 'img00001'
        console.log('correct:', imageNumber)
        console.log('incorrect:', imageNum)
        let myImg = (
            <div className="img">
                <img 
                    src={require(`../../../data/img${imageNum}.jpg`)} 
                    alt=""
                    width={width}
                    >
                </img>
            </div>
        )
        
        return (
            <div className="storyboard-frame-sequence">
                {myImg}
                <div className="sequence-text" style={{width:width}}>
                    <p>start: {start}, end: {end}</p>
                    <p>{text}</p> 
                </div>
                
            </div>
        );
    };
};

export default SingleFrameSequence;