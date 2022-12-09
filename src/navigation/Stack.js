import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cities from "../views/Cities";
import Home from "../views/Home";
import CitiesDetails from "../views/CitiesDetails";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import userActions from '../redux/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    const { logged } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    let { reEnter } = userActions
    const reEnterUser = async () => {
        let token = await AsyncStorage.getItem('token')
        token = token ? JSON.parse(token) : null
        if (token) {
            let user = token.token.user
            dispatch(reEnter(user))
        }
    }

    useEffect(() => {
        reEnterUser()
        // eslint-disable-next-line
    }, [])

    return (
        <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Cities" component={Cities} />
                    <Stack.Screen name="CitiesDetails" component={CitiesDetails} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}