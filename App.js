import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Palitra from "./components/Palitra";
import { TouchableOpacity } from 'react-native'
import BtnComp from "./components/BtnComp";
import {Image} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <Palitra></Palitra>
        <View style={styles.blth__block}>
            <TouchableOpacity
                style={styles.buttonFacebookStyle}
                activeOpacity={0.5}>
                <Image
                    source={{
                        uri:
                            'https://i.postimg.cc/WzzyyGnS/Screenshot-3.jpg',
                    }}
                    style={styles.buttonImageIconStyle}
                />
            </TouchableOpacity>
        </View>
      <BtnComp></BtnComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '15%',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
    blth__block:{
        width: "30%",
        marginLeft: "auto"
    },
    buttonFacebookStyle: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        borderColor: '#fff',
        height: 100,
        width: 90,
    },
    buttonImageIconStyle: {
        padding: 0,
        margin: 0,
        height: 100,
        width: 90,
        resizeMode: 'stretch',
    }
});
