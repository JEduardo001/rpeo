import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,Linking, TouchableOpacity, SafeAreaView,ScrollView,Alert} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {dac,comondu,laPaz,losCabos,loreto,mulege} from '../constants/texts/constantsPhoneDirectory/text.js'

export const PhoneDirectoryScreen = ({navigation}) => {
    const colorIcon = "rgb(55, 152, 255)"
    const sizeIcon = 35;

    const makeCall = (phoneNumber) => {
        const url = `tel:${phoneNumber}`;
        Linking.canOpenURL(url)
        .then((supported) => {
            if (supported) {
            return Linking.openURL(url);
            } else {
            Alert.alert('Error', 'No se puede abrir la app de teléfono');
            }
        })
        .catch((err) => console.error(err));
    };

    const sections = (dataSection) => {
       return (

            <View>
                <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>{dataSection.title}</Text>
                </View>

                <>
                    {dataSection.content.map((item, index) => (
                        <View key={index} style={styles.containerElement}>
                            <Text style={styles.textContentSection}>{item.title}</Text>
                            <TouchableOpacity onPress={() => makeCall(item.phone)}>
                                <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                            </TouchableOpacity>
                        </View>
                    ))}
                </>
            </View> 
        )
    }

    return (
        <SafeAreaView style ={styles.container} >
            <ScrollView>
                {sections(dac)}
                {sections(comondu)}
                {sections(laPaz)}
                {sections(losCabos)}
                {sections(loreto)}
                {sections(mulege)}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitleSection: {
        flex: 1,
        paddingLeft: 10,
        alignContent: "space-start",
        backgroundColor: "rgb(213, 213, 213)",
    },
    textTitleSection: {
        fontSize: 21,
        marginTop: 10,
        color: "black"
    },
    textContentSection: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 10,
        color: "black"
    },
    containerElement: {
        padding: 10,
        width: "100%",
        flexDirection: "row",
        alignContent: "space-around",
        justifyContent: "space-between",
    }
})