import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Pegar = ({ pais, medalhas, ouro, prata, bronze }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> O  {pais}!</Text>
            <Text style={styles.text}> Tem {ouro} medalhas de ouro!</Text>
            <Text style={styles.text}>  {prata} medalhas de prata!</Text>
            <Text style={styles.text}>  {bronze} medalhas de bronze!</Text>
            <Text style={styles.text}>  {medalhas} medalhas ao todo!</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: '#333',
    },
});

export default Pegar