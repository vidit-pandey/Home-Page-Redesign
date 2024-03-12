import "./main2.css"

import React, {Component} from 'react'

class main2 extends Component {
    render(){
        return (
            <div className="main-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>

                </div>
            </div>
        );
    };
};

export default main2
