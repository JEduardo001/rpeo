import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,Button, Pressable } from 'react-native';

export const DetailsScreen = ({navigation}) => {
    const [contador,setContador] = useState(0);


    return (
        <View style ={styles.container} >
            <Text>Estas en details </Text>
            <Text>Contador: {contador}</Text>
            <Pressable style={styles.btnGoHome} onPress={() => {
               navigation.navigate('home')
            }}><Text>Ir a home</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnGoHome:{
        marginTop: 20,
        color: 'black',
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    }
})