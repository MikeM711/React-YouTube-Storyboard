import React, { Component } from 'react';

import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }

    handleURLChange = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.url, "was submitted!")
        this.props.handleUrlSubmit(this.state.url)
    }

    render() {
        // console.log('5 second URLs')
        // console.log('https://www.youtube.com/watch?v=oEDFkc6k8vU')
        // console.log('https://www.youtube.com/watch?v=6e-sCFZlM1s')
        // console.log('longer videos')
        // console.log('https://www.youtube.com/watch?v=xVAbW1G64bM&list=PLQVvvaa0QuDeA05ZouE4OzDYLHY-XH-Nd&index=9')

        const { progressActive } = this.props

        return (
            <div className="video-form">
                <p>Hello from video form component</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="youtube-url-input"
                        type="text"
                        placeholder="Enter YouTube video URL here"
                        onChange={this.handleURLChange}
                        value={this.state.url}
                        disabled={progressActive}
                    />
                    <button
                        className="waves-effect waves-light btn #42a5f5 blue lighten-1 submit-form-button"
                        disabled={progressActive}
                    >Submit</button>
                </form>
            </div>
        );
    };
};

export default Form;