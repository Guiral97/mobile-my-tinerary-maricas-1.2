import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function CardCity(props) {

    let { photo, name, navigation, city } = props;

    const NavigationContainer = () => {
        navigation.navigate('CitiesDetails', { city })
    }

    const styles = StyleSheet.create({
        text: {
            color: '#fff',
            fontSize: 30,
            textAlign: "center",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            textShadowColor: 'red',
            marginTop: 30,
        },
        text2: {
            color: '#fff',
            fontSize: 30,
            textAlign: "center",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 5,
            textShadowColor: 'black',
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
        },
        backimage: {
            width: '100%',
            height: '100%',
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            borderRadius: 20,
            overflow: 'hidden',
            width: 200,
            height: 150,
            margin: 10,
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            shadowColor: 'black',
        },
    });

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={NavigationContainer}>
                <ImageBackground source={{ uri: photo }} resizeMode="cover" style={styles.backimage}>
                    <Text style={styles.text2}>{name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}