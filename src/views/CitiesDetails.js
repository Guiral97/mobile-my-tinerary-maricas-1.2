import { View, Text, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DB_LINK } from '../../url';
import Reaction from '../components/Reaction';

const image = { uri: "https://i.pinimg.com/originals/2a/38/df/2a38df0c0e8274eda894db62195ebb93.jpg" };

export default function CitiesDetails({ route }) {

    let [itinerary, seyItineries] = useState([])
    const { city } = route.params;

    useEffect(() => {
        axios.get(`${DB_LINK}api/itineraries?cityId=${city._id}`)
            .then(res => {
                seyItineries(res.data.response)
            })
            .catch(err => console.log(err))
    }, [])


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
            fontSize: 60,
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
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backimage}>
                <ScrollView style={styles.scroll}>
                    <Image source={{ uri: city.photo }} style={styles.image} />
                    <Text style={styles.title}>{city.name}</Text>
                    <Text style={styles.subtitle}>{city.continent}</Text>
                    <Text style={styles.text}>Population: {city.population}</Text>
                    { itinerary.length > 0 ? (
                    itinerary.map((itinerary) => {
                        return (
                            <View style={styles.containerItinerary}>
                                <Image source={{ uri: itinerary.photo[0] }} style={styles.image2} />
                                <View style={styles.reactionContainer}>
                                    <Reaction type='itinerary' eventid={itinerary._id} />
                                </View>
                                <Text style={styles.titleitinerary}>{itinerary.name}</Text>
                                <Text style={styles.text}>{itinerary.description}</Text>
                                <Text style={styles.text}>Duration: {itinerary.duration} hrs</Text>
                                <Text style={styles.text}>Price: {itinerary.price}$</Text>
                            </View>
                        )
                    }))
                    : null
                    }
                </ScrollView>
            </ImageBackground>
        </View>
    )
}