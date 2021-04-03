import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
export default function Bluth() {
    const img = "https://i.postimg.cc/WzzyyGnS/Screenshot-3.jpg";
    return (
        <View style={styles.container}>
            <Button style={styles.blth}
                    title="blth"
                    onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    blth: {
        width: 100,
        justifyContent: 'flex-end'
    }
});
