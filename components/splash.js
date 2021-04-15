import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux';


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
        return (
            <View>
                <Text style={{color: 'white'}}> {this.props.roler} </Text>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Splash)
