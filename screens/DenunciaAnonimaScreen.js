import React, {useState} from 'react'
import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from "expo-image-picker";
import { Picker } from '@react-native-picker/picker';
import * as Location from "expo-location";

import {View,Text,Button,KeyboardAvoidingView,Platform,SafeAreaView,TextInput,StyleSheet, TouchableOpacity, ScrollView} from "react-native"

export const DenunciaAnonimaScreen = () => {
    const [selected, setSelected] = useState();

    const [pseudomino,setPseudomino] = useState()
    const [email,setEmail] = useState()
    const [phoneNumber,setPhoneNumber] = useState()
    const [municipio,setMunicipio] = useState()
    const [localidad,setLocalidad] = useState()
    const [colonia,setColonia] = useState()
    const [calles,setCalles] = useState()
    const [puntoReferencia,setPuntoReferencia] = useState()
    const [date,setDate] = useState()
    const [hora,setHora] = useState()
    const [descripcionHechos,setDescripcionHechos] = useState()
    const [descripcionSospechoso,setDescripcionSospechoso] = useState()

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        });

        if (!result.canceled) {
        setImage(result.assets[0].uri);
        }
    };


    const [location, setLocation] = useState(null);

    const getLocation = async () => {
      // Pedir permisos
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "No podemos acceder a la ubicación.");
        return;
      }
  
      // Obtener ubicación
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
  
      Alert.alert(
        "Ubicación obtenida",
        `Lat: ${loc.coords.latitude}, Lng: ${loc.coords.longitude}`
      );
    };


    return (
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
             <ScrollView> 
                <Text style={styles.text} >Nombre ó pseudonimo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre ó pseudonimo"
                    value={pseudomino}
                    onChangeText={setPseudomino}
                    multiline={false}   
                    scrollEnabled={true}
                />
            <View style={styles.containerRow}>
                    <View>
                        <Text style={styles.text} >Correo electrónico</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre ó pseudonimo"
                            value={pseudomino}
                            onChangeText={setPseudomino}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>

                    <View>
                        <Text style={styles.text} >Número Telefónico</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Número de telefono"
                            value={pseudomino}
                            onChangeText={setPseudomino}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>
            </View>
            <Text style={styles.textDescription}>
                    *Para dar seguimiento a la denuncia es necesario proporcionar su correo y/o número telefónico
            </Text>
                {/* municipio */}
                <View style={styles.containerRow}>
                <View>
                        <Text style={styles.text} >Localidad</Text>
                        <TextInput
                            style={[styles.input]}
                            placeholder="Ingresa la localidad"
                            value={localidad}
                            onChangeText={setLocalidad}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>

                    <View>
                        <Text style={styles.text} >Colonia</Text>
                        <TextInput
                            style={[styles.input]}
                            placeholder="Ingresa la colonia"
                            value={colonia}
                            onChangeText={setColonia}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>
                </View>
                <Text style={styles.text} >Calles</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa la calle"
                            value={calles}
                            onChangeText={setCalles}
                            multiline={false}   
                            scrollEnabled={true}
                />

                <Text style={styles.text} >Punto de referencia</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Calles,Colonia,Referencias, etc..."
                        value={puntoReferencia}
                        onChangeText={setPuntoReferencia}
                        multiline={false}   
                        scrollEnabled={true}
                />

                <Text style={styles.label}>Ubicación:</Text>
                    <Button title="Obtener ubicación" onPress={getLocation} />

                    {location && (
                        <Text style={styles.coords}>
                        Lat: {location.latitude}, Lng: {location.longitude}
                        </Text>
                    )}

                {/* compartir ubicacion */}


                <Picker
                    selectedValue={selected}
                    onValueChange={(value) => setSelected(value)}>
                    <Picker.Item label="Demanda 1" value="d1" />
                    <Picker.Item label="Demanda 2" value="d2" />
                    <Picker.Item label="Demanda 3" value="d3" />
                </Picker>
                <View style={styles.containerRow}>
                    <View>
                        <Text style={styles.text} >Fecha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ingresa la fecha"
                            value={puntoReferencia}
                            onChangeText={setPuntoReferencia}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>
                    <View>
                        <Text>Hora</Text>
                        <TextInput
                                style={styles.input}
                                placeholder="Ingresa la hora"
                                value={hora}
                                onChangeText={setHora}
                                multiline={false}   
                                scrollEnabled={true}
                        />
                    </View>
                </View>
                <Text>Seleccione el delito</Text>
                <TextInput
                        style={styles.input}
                        placeholder="Delito electoral"
                        value={hora}
                        onChangeText={setHora}
                        multiline={false}   
                        scrollEnabled={true}
                />
                <Text>Descripción de los hechos</Text>
                <TextInput
                        style={styles.input}
                        placeholder="¿Cómo? ¿Cuando?..."
                        value={hora}
                        onChangeText={setHora}
                        multiline={false}   
                        scrollEnabled={true}
                />
                <Text>Descripción del sospechoso</Text>
                <TextInput
                        style={styles.input}
                        placeholder="Rasgos físicos, perforaciones, tatuajes..."
                        value={hora}
                        onChangeText={setHora}
                        multiline={false}   
                        scrollEnabled={true}
                />

                <TouchableOpacity style={styles.btnGaleria} onPress={pickImage}>
                    <Text style ={[styles.textButtons, styles.textButtonGalery]}>GALERIA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend}>
                    <Text style ={styles.textButtons}>ENVIAR</Text>
                </TouchableOpacity>
             </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 20
    },
 
    input: {
        marginTop: 10,
        height: 40,
        width: 150,  
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 11
    },
  
    text: {
        fontSize: 17
    },
    containerRow: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textDescription: {
        marginTop: 20
    },
    textButtons: {
        color: 'white',
        textAlign: "center",
        fontSize: 20

    },
    btnSend: {
        marginTop: 20,
        height: 40,
        borderRadius: 7,
        justifyContent: "center",
        backgroundColor: "rgb(45, 196, 234)"
    },
    textButtonGalery: {
        color: 'black'
    },
    btnGaleria: {
        marginTop: 30,
        height: 40,
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: "rgb(200, 211, 213)"
    }
})