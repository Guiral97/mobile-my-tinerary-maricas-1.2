import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native'
import React from 'react'
import CardCity from '../components/CardCity';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions';

const image = { uri: "https://i.pinimg.com/originals/2a/38/df/2a38df0c0e8274eda894db62195ebb93.jpg" };

export default function Cities(props) {
    let dispatch = useDispatch()
    const [search, setSearch] = useState('')
    let { allCities, searchInput } = useSelector(store => store.citiesReducer)
    let { getContinentCities, getCities } = citiesActions
    
    useEffect(() => {
        if (searchInput) {
            let aux = {
                search: searchInput,
            }
            dispatch(getContinentCities(aux))
            setSearch(searchInput)
        } else {
            dispatch(getCities())
        }
        // eslint-disable-next-line
    }, [])

    const styles = StyleSheet.create({
        text: {
            color: '#fff',
            fontSize: 30,
            textAlign: "center",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            textShadowColor: '#063970',
            marginTop: 30,
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
        containerCard: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
        },
        inputText: {
            backgroundColor: '#fff',
            width: '90%',
            height: 40,
            borderRadius: 20,
            margin: 20,
            paddingLeft: 20,
        },
    });
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backimage}>
                <ScrollView >
                    <Text style={styles.text}>Welcome to Cities</Text>
                    <TextInput style={styles.inputText} placeholder="Search" onChangeText={(text) => {
                        setSearch(text)
                        let data = {
                            search: text
                        }
                        dispatch(getContinentCities(data))
                    }}  />
                    <View style={styles.containerCard}>
                        {allCities.map(city => <CardCity key={city._id} id={city._id} city={city} name={city.name} navigation={props.navigation} continent={city.continent} photo={city.photo} />)}
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}