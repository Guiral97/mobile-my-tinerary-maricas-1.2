import { View, Text, StyleSheet, ImageBackground, Image, Alert, Button, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../redux/actions/userActions';


const image = { uri: "https://i.pinimg.com/originals/2a/38/df/2a38df0c0e8274eda894db62195ebb93.jpg" };

export default function Home(props) {
    const { token, logged } = useSelector(state => state.userReducer)
    const { logout } = userActions;
    const dispatch = useDispatch();

    const NavigationContainer = () => {
        props.navigation.navigate('Cities')
    }

    const handleLogout = async () => {
        try {
            const res = await dispatch(logout(token))
            if (res.payload.success) {
                Alert.alert('Success', res.payload.response)
                props.navigation.navigate('SignIn')
            } else {
                Alert.alert('Error', res.payload.response)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backimage}>
                <ScrollView >
                    <Image style={styles.image} source={require('../../assets/logo-white.png')} />
                    <Text style={styles.text}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                    <View style={styles.fixToText}>
                        <Button title="Go to Cities" style={styles.button}  onPress={NavigationContainer} />
                    </View>
                    <Carousel />
                    { logged ? (
                        <TouchableOpacity onPress={handleLogout}>
                        <Text style={styles.logout}>Log Out</Text>
                    </TouchableOpacity>
                    )
                    : (
                        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
                        <Text style={styles.signin}>Sign In</Text>
                    </TouchableOpacity>
                    )
                    }
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
    },
    container: {
        width: '100%',
        height: '100%',
    },
    backimage: {
        width: '100%',
        height: '100%',
        justifyContent: "center"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        width: 800,
        height: 800,     
    },
    logout: {
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        backgroundColor: 'red',
        marginTop: 60,
        width: 150,
        alignSelf: "center",
        borderRadius: 10,
    },
    signin: {
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        backgroundColor: 'green',
        marginTop: 60,
        width: 150,
        alignSelf: "center",
        borderRadius: 10,
    },
});