import React, {useState, useEffect} from 'react';
import {View,Text,StyleSheet,Button, Pressable, TouchableOpacity, SafeAreaView,ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export const DirectorioScreen = ({navigation}) => {
    const [contador,setContador] = useState(0);
    const colorIcon = "rgb(55, 152, 255)"
    const sizeIcon = 30;

    const sectionsComondu = () => {
        return (
            <View>
                 <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>Comondú</Text>
                </View>

                 <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Ciudad Constitución</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Insurgentes</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Puerto San Carlos</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                     <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const sectionLaPaz = () => {
        return (
            <View>
                  <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>La Paz</Text>
                </View>
                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Centro Mujeres</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>La Paz</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                     <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Los Barriles</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Los Planes</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Todos Santos</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const sectionLosCabos = () => {
        return (
            <View>

                <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>Los Cabos</Text>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Cabo San Lucas Línea 1</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Cabo San Lucas Línea 2</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>La Riberia</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>San José del cabo</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Santiago</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const sectionMulege = () => {
        return (
            <View>

                <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>Mulegé</Text>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Bahía Tortugas</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Guerrero Negro</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>H. Mulegé</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>La Bocana</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>San Ignacio</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>


                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Santa Rosalía Línea 1</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                     <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Santa Rosalía Línea 2</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Vizcaíno</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style ={styles.container} >
            <ScrollView>
                <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>DAC</Text>
                </View>
                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>La Paz</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                {sectionsComondu()}
                {sectionLaPaz()}
                {sectionLosCabos()}
              


                <View style={styles.containerTitleSection}>
                    <Text style = {styles.textTitleSection}>Loreto</Text>
                </View>

                <View style={styles.containerElement}>
                    <Text style={styles.textContentSection}>Loreto</Text>
                    <TouchableOpacity onPress={() => console.log("cac")}>
                        <Icon name="phone-square" color={colorIcon} size={sizeIcon} />
                    </TouchableOpacity>
                </View>

                {sectionMulege()}

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