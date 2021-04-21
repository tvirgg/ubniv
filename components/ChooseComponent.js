import React from "react";
import {Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {setCurrentLocationC} from "../store";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLocation: (location) => {
            dispatch(setCurrentLocationC(location))
        }
    };
}
class ChooseComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {first: true, second: true};
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: "center"}}>
                <Text style={styles.lable}>
                    CHOOSE YOUR DEVICE
                </Text>
                <View  style={styles.first}>
                    <Image source={require('../assets/1.png')}>

                    </Image>
                </View>
                <View  style={styles.first_blank}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    lable:{
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Space Ranger',
        fontSize: 30
    },
    first:{
        width: 300,
        height: 300,
        borderRadius: 300,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center' // Centered horizontally

    },
    first_blank:{
        width: 300,
        height: 300,
        borderRadius: 300,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'white',
        shadowOpacity: 1.0
    }
});
export default connect(null, mapDispatchToProps)(ChooseComponent);
