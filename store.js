import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const initialState = {
    data: [],
    roler : 'HOME'

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setCurrentLocation":
            return { ...state, roler: action.value }
        default:
            return state;
    }
}


export const setCurrentLocationC = (location) => {
    return {
        type: "setCurrentLocation",
        value: location
    };
};

const persistedReducer = persistReducer(persistConfig, reducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor };
