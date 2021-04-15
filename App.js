import React from 'react';
import image from './assets/nebula_stock_2_by_cosmicspark_d9z60dd-fullview.jpg'
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import { Provider} from 'react-redux';
import Splash from "./components/Palitra_main";
import { store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
export default function App() {
  return (
      <View style={styles.container}>
          <ImageBackground source={image} style={styles.image}>
              <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                      <Splash></Splash>
                  </PersistGate>
              </Provider>
          </ImageBackground>
      </View>
);


}

const styles = StyleSheet.create({
    container: {
    flex: 1
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});
