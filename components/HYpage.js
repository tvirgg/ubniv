import React from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {setCurrentLocationC} from "../store";
import {connect} from "react-redux";


const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentLocation: (location) => {
            dispatch(setCurrentLocationC(location))
        }
    };
}
class Hypage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.loginScreenButton}
                    onPress={() => { this.props.setCurrentLocation("CHOOSE")
                    }}
                    underlayColor='transparent'>
                    <Text style={styles.loginText}>LAMPLY</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginScreenButton:{
        paddingTop:10,
        paddingBottom:10,
    },
    loginText:{
        color:'#fff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 60,
        lineHeight: 80
    }
});
export default connect(null, mapDispatchToProps)(Hypage);
