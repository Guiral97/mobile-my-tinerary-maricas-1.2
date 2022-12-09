import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactionActions from '../redux/actions/reactionActions'

export default function Reaction(props) {
    const { token, id } = useSelector(state => state.userReducer)

    const dispatch = useDispatch()
    let { eventid, type } = props
    const { getReaction, updateReaction } = reactionActions
    const [reactions, setReaction] = useState([])
    const [like, setLike] = useState(true)

    useEffect(() => {
        reactioness()
    }, [like])

    async function reactioness() {
        let res = await dispatch(getReaction({ type, eventid }))
        setReaction(res.payload.response)
    }

    async function likeEvent(reaction) {

        let name
        let icon
        let iconBack
        reactions.data.map(react => {
            if (react.name === reaction) {
                name = react.name
                icon = react.icon
                iconBack = react.iconBack
            }
        })

        let data = {
            token,
            id: eventid,
            name,
            type
        }
        try {
            await dispatch(updateReaction(data))
            setLike(!like)
        } catch (error) {
            console.log(error)
        }
    }

    const styles = StyleSheet.create({
        icon: {
            width: 25,
            height: 25,
        },
        numbers: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            textShadowColor: 'black',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
            marginLeft: 5,
            marginRight: 15,
        },
    });

    return (
        <>
            {reactions.success &&
                reactions.data.map((reaction) => {
                    let res = reaction.userId.find(user => user._id === id)
                    return (
                        res ? (
                            <>
                                <TouchableOpacity onPress={() => {
                                    likeEvent(reaction.name)
                                }}>
                                    <Image source={{ uri: reaction.icon }} name={reaction.name} key={reaction._id} style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.numbers}>{reactions.lengthOfReactions[reaction.name]}</Text>
                            </>
                        ) : (
                            <>
                                <TouchableOpacity onPress={() => {
                                    likeEvent(reaction.name)
                                }}>
                                    <Image source={{ uri: reaction.iconBack }} name={reaction.name} key={reaction._id} style={styles.icon} />
                                </TouchableOpacity>
                                <Text style={styles.numbers}>{reactions.lengthOfReactions[reaction.name]}</Text>
                            </>
                        ))
                })
            }
        </>
    )
}
