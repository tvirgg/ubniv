import React, { Component } from "react";
const HOME = "";
import { connect } from 'react-redux';
import Hypage from "./HYpage";
import CircleSliderContainer from "./Stick_main";


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
            default:
                return <Hypage></Hypage>;
        }
    }
}

//  export default splash
export default connect(mapStateToProps)(Splash)
