import React, { Component } from "react";
import { connect } from 'react-redux';
import Hypage from "./HYpage";
import CircleSliderContainer from "./Stick_main";
import ChooseComponent from "./ChooseComponent";


const mapStateToProps = (state) => {
    return {
        roler: state.roler
    };
}

class Splash extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        switch (this.props.roler) {
            case "HOME":
                return <Hypage></Hypage>;
            case "PALITRA":
                return <CircleSliderContainer></CircleSliderContainer>;
            case "CHOOSE":
                return <ChooseComponent></ChooseComponent>;
            default:
                return <Hypage></Hypage>;
        }
    }
}

//  export default splash
export default connect(mapStateToProps)(Splash)
