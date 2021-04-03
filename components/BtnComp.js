import React from 'react';
import {StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, Image} from 'react-native';
export default function BtnComp() {
    return (
        <View style={styles.container}>
            <Text style={styles.container_lable}>
                Выбор режима
            </Text>
            <View style={styles.blth__block_comp}>
                <TouchableOpacity
                    style={styles.buttonblock}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://i.postimg.cc/Zn8f3pXj/Screenshot-4.jpg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>
                       Радуга
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonblock}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://i.postimg.cc/h42Q4fJq/Screenshot-4.jpg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>
                        Смена цветов
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonblock}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://i.postimg.cc/J4Q6z3Nz/Screenshot-6.jpg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>
                        Серпантин
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonblock}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://i.postimg.cc/gc8tfbrR/Screenshot-7.jpg',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>
                        Пламя
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonblock}
                    activeOpacity={0.5}>
                    <Image
                        source={{
                            uri:
                                'https://cdn4.iconfinder.com/data/icons/transport-flat-4/614/338_-_Police_Car-512.png',
                        }}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>
                        Полиция
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        fontFamily: 'Arial sans-serif',
        fontWeight: 'bold',
        fontSize: 20
    },
    blth__block_comp:{
        marginTop: 10,
        width: "100%",
        marginLeft: "auto"
    },
    buttonblock: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 61,
        width: "100%",
    },
    buttonImageIconStyle: {
        padding: 0,
        margin: 0,
        height: 60,
        width: 60,
        resizeMode: 'stretch',
    },
    container_lable:{
        marginLeft: 10
    },
    buttonTextStyle: {
    marginTop: 20,
        marginLeft: 10
    }
});
