import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            mobile: false,
            greeting: "Sup boi",
            scrollAbout: 0
         };
    }

    click = () => {
        this.props.parentMethod();
    }

    render (){

        return (
            <div className="Modal" onClick={this.click}>
                <div className="modalBody">
                    <div className="projectName">{this.props.name}</div>
                    <div className="close">X</div>
                    <div className={this.props.pic + " specProjectImage"}></div>
                    <div className="projectInfo">{this.props.info}</div>
                </div>
            </div>
        );
    }
}

export default Modal;
