import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My Tinerary</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2596be',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 50,
    }
});
