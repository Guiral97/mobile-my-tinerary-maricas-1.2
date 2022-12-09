import { View, ImageBackground, StyleSheet, Text, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { DB_LINK } from '../../url';
import axios from 'axios';

const image = { uri: "https://i.pinimg.com/originals/2a/38/df/2a38df0c0e8274eda894db62195ebb93.jpg" };

export default function SignUp(props) {
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        age: '',
        photo: '',
        email: '',
        password: '',
    })

    const handleInput = (e, name, value) => {
        setUserData({
            ...userData,
            [name]: e || value
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${DB_LINK}api/auth/sign-up/`, userData)
            if (res.data.success) {
                Alert.alert('Success', res.data.message)
                props.navigation.navigate('Home')
            } else {
                Alert.alert('Error', res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backimage}>
                <Text style={styles.subtitle}>Create your account</Text>
                <TextInput style={styles.input} placeholder="Name" onChangeText={(e) => handleInput(e, "name")} />
                <TextInput style={styles.input} placeholder="LastName" onChangeText={(e) => handleInput(e, "lastName")} />
                <TextInput style={styles.input} placeholder="Age" onChangeText={(e) => handleInput(e, "age")} />
                <TextInput style={styles.input} placeholder="Photo" onChangeText={(e) => handleInput(e, "photo")} />
                <TextInput style={styles.input} placeholder="Email" onChangeText={(e) => handleInput(e, "email")} />
                <TextInput style={styles.inputpassword} placeholder="Password" secureTextEntry={true} password={true} onChangeText={(e) => handleInput(e, "password")} />
                <View style={styles.fixToText} >
                    <Text style={styles.button} onPress={handleSubmit}>Create account</Text>
                </View>
                <Text style={styles.subtitle2}>Do you have an account?</Text>
                <View style={styles.fixToText} >
                    <Text style={styles.button2} onPress={() => props.navigation.navigate('SignIn')}>Go to Sign Up</Text>
                </View>
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
    title: {
        color: '#fff',
        fontSize: 80,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
    },
    titleitinerary: {
        color: '#fff',
        fontSize: 36,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
    },
    subtitle: {
        color: '#fff',
        fontSize: 55,
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
        alignContent: "center",
        justifyContent: "center"
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: "cover",
        alignSelf: "center",
    },
    image2: {
        width: 400,
        height: 250,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 20,
        marginTop: 20,
    },
    containerItinerary: {
        width: '100%',
        height: '100%',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        margin: 20,
    },
    scroll: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    reactionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
    input: {
        fontSize: 35,
        width: '80%',
        margin: 12,
        alignSelf: "center",
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    inputpassword: {
        secureTextEntry: true,
        fontSize: 35,
        width: '80%',
        // height: 40,
        margin: 12,
        alignSelf: "center",
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        height: 50,
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        width: '50%',
        padding: 10,
    },
    button2: {
        height: 50,
        color: '#fff',
        fontSize: 30,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: 20,
        width: '50%',
        padding: 10,
    },
    subtitle2: {
        color: '#fff',
        fontSize: 45,
        textAlign: "center",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        textShadowColor: '#063970',
        marginTop: 50,
    },
});