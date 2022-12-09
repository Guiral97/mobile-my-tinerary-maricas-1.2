import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Stack from './src/navigation/Stack';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers/rootReducer';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer })

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar style="auto" />
                <Stack />
            </NavigationContainer>
        </Provider>
    );
}