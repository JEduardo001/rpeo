import React, {useState,useEffect} from 'react'
import * as ImagePicker from "expo-image-picker";
import { Picker } from '@react-native-picker/picker';
import * as Location from "expo-location";
import Text from "../overridesComponents/text.js";
import {delitos,municipios} from "../constants/texts/constantsAnonymousReport/text.js";
import {View,Switch,Alert,TouchableWithoutFeedback,KeyboardAvoidingView,Platform,SafeAreaView,TextInput,StyleSheet, TouchableOpacity, ScrollView} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {validateDataForm} from "../services/sendFormReport/submitFormReport.js";

export const AnonymousReportScreen = () => {
    const colorIcon = "black"
    const sizeIcon = 30;
    const [showSelectDate, setShowSelectDate] = useState(false);
    const [showSelectHour, setShowSelectHour] = useState(false);
    const [textBtnSendReport, setTextBtnSendReport] = useState('ENVIAR');
    const [shareLocation, setShareLocation] = useState(false);

    const [formState, setFormState] = useState({
        fecha: null,
        hora: null,
        hechos: 'Abuso de autoridad',
        municipio: 'La Paz',
        nombre: '',
        correo: '',
        celular: '',
        localidad: '',
        colonia: '',
        calles: '',
        direccion: '',
        sospechoso: '',
        descripcion: '',
        image: null,
        latitud: null,
        longitud: null
    });
    
    const onChangeDate = (event, selectedDate, typeTime) => {

        if (event.type === 'dismissed') {
            if(typeTime === 'date'){
                setFormState({ ...formState, fecha: null })
            }
            if(typeTime === 'time'){
                setFormState({ ...formState, hora: null })
            }
            setShowSelectDate(false)
            setShowSelectHour(false)
        } 
        if(event.type === 'set'){//YYYY-MM-DD
            const formattedDate = selectedDate.toISOString().split('T')[0]
            if(typeTime === 'date'){
                setFormState({ ...formState, fecha: formattedDate })
            }
            if(typeTime === 'time'){//HH:MM:SS
                const hours = selectedDate.getHours().toString().padStart(2, '0');
                const minutes = selectedDate.getMinutes().toString().padStart(2, '0');
                const seconds = selectedDate.getSeconds().toString().padStart(2, '0');
                const formattedTime = `${hours}:${minutes}:${seconds}`;
                setFormState({ ...formState, hora: formattedTime })
            }
            setShowSelectDate(false)
            setShowSelectHour(false)
        }

    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
            base64: true
        })

        if (!result.canceled) {
            const base64Image = `data:image/jpeg;base64,${result.assets[0].base64}`;
            setFormState({ ...formState, image: base64Image })
        }
    }

    const sendReport = async () => {
        setTextBtnSendReport("Enviando...")
        await validateDataForm(formState)
        setTextBtnSendReport("ENVIAR")

    }

    const getLocation = async (sendLocation) => {
        setShareLocation(sendLocation);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso denegado", "No podemos acceder a la ubicación.");
        return;
      }
      console.log(sendLocation)
      if(sendLocation){
        let loc = await Location.getCurrentPositionAsync({});
        setFormState({ ...formState, latitud: loc.coords.latitude, longitud: loc.coords.longitude });   
      }else{
        setFormState({ ...formState, latitud: null, longitud: null });   
      }
       
    };

   
    
    const showComponentSelectedDate = () => {
        return (
           <View>
             <DateTimePicker
                style={{marginTop: 10}}
                value={new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => onChangeDate(event, selectedDate, 'date')}
                minimumDate={new Date(2000, 0, 1)} 
                maximumDate={new Date(2035, 11, 31)} 
            />  
           </View>
        )
    }

    const showComponentSelectedHour = () => {
        return (
            <DateTimePicker
                style={{marginTop: 10}}
                value={new Date()}
                mode="time"
                display="default"
                onChange={(event, selectedDate) => onChangeDate(event, selectedDate, 'time')}
            />  
        )
    }   

    const showComponentSelectDateAndroid = () => {
      return (
        <View>                  

            <TouchableOpacity style = {styles.selectDate} onPress={() => setShowSelectDate(!showSelectDate)}>
                    <Ionicons style={styles.iconImg} name="calendar-outline" color={colorIcon} size={sizeIcon} />
                    <Text style = {styles.text}>Seleccionar Fecha</Text>
            </TouchableOpacity>
            <Text style = {styles.textDateSelected}>
                {
                    formState.fecha == null
                    ? 'Fecha no seleccionada'  
                    : formState.fecha
                }
            </Text>
            {
                showSelectDate 
                ? 
                   showComponentSelectedDate()
                : null
            }
            <TouchableOpacity style = {styles.selectDate} onPress={() => setShowSelectHour(!showSelectHour)}>
                <Ionicons style={styles.iconImg} name="time-outline" color={colorIcon} size={sizeIcon} />
                <Text style = {styles.text}>Seleccionar Hora</Text>
            </TouchableOpacity>
            <Text style = {styles.textDateSelected}>
                {
                    formState.hora == null
                    ? 'Hora no seleccionada'
                    : formState.hora
                }
            </Text>
            {
                showSelectHour
                ?
                   showComponentSelectedHour()
                : null
            } 
        </View>
      )
    }

    const showComponentSelectDateIOS = () => {
        return (
            <View>
                 <View>
                    <View style = {styles.containerRow}>
                        <Ionicons style={styles.iconImg} name="calendar-outline" color={colorIcon} size={sizeIcon} />
                        <Text style={styles.text}>Seleccionar Fecha</Text>
                    </View>
                    {showComponentSelectedDate()}
                 </View>
                <View>
                    <View style = {styles.containerRow}>
                        <Ionicons style={styles.iconImg} name="time-outline" color={colorIcon} size={sizeIcon} />
                        <Text style={styles.text}>Seleccionar Hora</Text>
                    </View>
                    {showComponentSelectedHour()}
                </View>
            </View>
        )
    }
  
    return (
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
             <ScrollView> 
                <Text style={styles.text} >Nombre ó pseudonimo</Text>
                <Text style={styles.subTextInputRequired} >Requerido</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre ó pseudonimo"
                    value={formState.nombre}
                    onChangeText={(value ) => setFormState({ ...formState, nombre: value })}
                    multiline={false}   
                    scrollEnabled={true}
                />
            <View style={styles.containerRow}>
                    <View>
                        <Text style={styles.text} >Correo electrónico</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Correo electrónico"
                            value={formState.correo}
                            onChangeText={(value) => setFormState({ ...formState, correo: value })}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>

                    <View>
                        <Text style={styles.text} >Número Telefónico</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Número de teléfono"
                            keyboardType="numeric"
                            value={formState.celular}
                            onChangeText={(value) => { 
                                setFormState({ ...formState, celular: value.replace(/[^0-9]/g, '') })
                            }}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>
            </View>
            <Text style={styles.textDescription}>
                    *Para dar seguimiento a la denuncia es necesario proporcionar su correo y/o número telefónico
            </Text>
                {/* municipio */}
                <Text style={styles.text} >Municipio</Text>
                <Picker
                    style={styles.containerDelito}
                    selectedValue={formState.municipio}
                    onValueChange={(value) => setFormState({ ...formState, municipio: value })}>
                    {

                        municipios.map(municipio => {
                            return (
                                <Picker.Item label={municipio} value={municipio} key={municipio} />
                            )
                        })
                    }
                   
                </Picker>
                <View style={styles.containerRow}>
                <View>
                        <Text style={styles.text} >Localidad</Text>
                        <Text style={styles.subTextInputRequired} >Requerido</Text>

                        <TextInput
                            style={[styles.input]}
                            placeholder="Ingresa la localidad"
                            value={formState.localidad}
                            onChangeText={(value) => setFormState({ ...formState, localidad: value })                        }
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>

                    <View>
                        <Text style={styles.text} >Colonia</Text>
                        <Text style={styles.subTextInputRequired} >Requerido</Text>

                        <TextInput
                            style={[styles.input]}
                            placeholder="Ingresa la colonia"
                            value={formState.colonia}
                            onChangeText={(value) => setFormState({ ...formState, colonia: value })                        }
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>
                </View>
                    <Text style={styles.text} >Calles</Text>
                    <Text style={styles.subTextInputRequired} >Requerido</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa calles"
                        value={formState.calles}
                        onChangeText={(value) => setFormState({ ...formState, calles: value })}
                        multiline={false}   
                        scrollEnabled={true}
                />

                <Text style={styles.text} >Punto de referencia</Text>
                    <TextInput
                        style={styles.inputLongText}
                        placeholder="Calles,Colonia,Referencias, etc..."
                        value={formState.direccion}
                        onChangeText={(value) => setFormState({ ...formState, direccion: value })}
                        multiline={true}   
                        scrollEnabled={true}
                />

                {/* compartir ubicacion */}
                <View style = {styles.containerSendUbication}>

                    <Switch
                        style={{ marginRight: 10 }}
                        value={shareLocation}
                        onValueChange={(value) => getLocation(value)}
                    />
                    <Text style={styles.text}>Compartir mi ubicación</Text>

                </View>

                <View style={styles.containerRow}>
                    {
                        Platform.OS === "ios"
                        ? 
                            showComponentSelectDateIOS()
                           
                        : 
                            showComponentSelectDateAndroid()
                    }
                   
                   
                </View>
                <Text style={[styles.text, {marginTop: 15}]}>Seleccione el delito</Text>
                <Picker
                    style={styles.containerDelito}
                    selectedValue={formState.hechos}
                    onValueChange={(value) => setFormState({ ...formState, hechos: value })}>
                    {

                        delitos.map(delito => {
                            return (
                                <Picker.Item label={delito.delito} value={delito.delito} key={delito.delito} />
                            )
                        })
                    }
                   
                </Picker>
                <Text style= {styles.text}>Descripción de los hechos</Text>
                <Text style={styles.subTextInputRequired} >Requerido</Text>
                <TextInput
                    style={styles.inputLongText}
                    placeholder="¿Cómo? ¿Cuando?..."
                    value={formState.descripcion}
                    onChangeText={(value) => setFormState({ ...formState, descripcion: value })}
                    multiline={true}   
                    scrollEnabled={true}
                />
                <Text style= {styles.text}>Descripción del Sospechoso</Text>
                <TouchableWithoutFeedback> 
                    <TextInput
                        style={styles.inputLongText}
                        placeholder="Rasgos físicos, perforaciones, tatuajes..."
                        value={formState.sospechoso}
                        onChangeText={(value) => setFormState({ ...formState, sospechoso: value })}
                        multiline={true}   
                        scrollEnabled={true}
                    />
                </TouchableWithoutFeedback>
              

                <TouchableOpacity style={styles.btnGaleria} onPress={pickImage}>
                    <Ionicons style={styles.iconImg} name="image-outline" color={colorIcon} size={sizeIcon} />
                    <Text style ={[styles.textButtons, styles.textButtonGalery]}>Subir imagen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend} onPress={() => sendReport()}>
                    <Text style ={styles.textButtons}>{textBtnSendReport}</Text>
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
        fontSize: 12.5
    },
    inputLongText: {
        marginTop: 10,
        height: 100,
        width: "80%",  
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 14.5,
        marginBottom: 20
    },
    text: {
        padding: 4,
        fontSize: 19
    },
    subTextInputRequired: {
        fontSize: 12.5,
        color: 'rgb(186, 141, 141)',

    },
    containerRow: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textDescription: {
        marginTop: 20
    },
    containerSendUbication: {
        marginTop:  20,
        flexDirection: 'row',
        alignItems: 'center'
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
    textDateSelected: {
        padding: 7,
        borderRadius: 10,
        backgroundColor: "rgba(201, 201, 201, 0.65)"
    },
    selectDate: {
        marginTop: 20,
        flexDirection: "row",
        padding: 5,
        borderRadius: 10,
        backgroundColor: "rgb(228, 228, 228)",
        borderWidth: 0.5
       
    },
    btnGaleria: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        height: 40,
        borderRadius: 15,
        justifyContent: "center",
        backgroundColor: "rgb(200, 211, 213)"
    },
    iconImg: {
        marginRight: 10
    },
    containerDelito: {
        marginTop: 20,
        marginBottom: 40
    }
})