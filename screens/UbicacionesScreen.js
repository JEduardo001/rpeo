import React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,FlatList,ActivityIndicator,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const UbicacionesScreen = ({ navigation }) => {
    const [text,setText] = useState('');
    const [email,setEmail] = useState('');
    const [visibleTextOne,setVisibleTextOne] = useState('none');
    const [visibleText2,setVisibleText2] = useState('none');

    
    const loading = true
    const data = [
        { id: '1', name: 'Elemento 1' },
        { id: '2', name: 'Elemento 2' },
        { id: '3', name: 'Elemento 3' },
        { id: '4', name: 'Elemento 4' },
        { id: '5', name: 'Elemento 5' },
    ]

 

    const ElementList = (item) => {
        return (
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style ={{color: 'red'}}>Estas en UBICACIONES esp</Text>

                <View style={styles.containerEmailAndUsername}>
                    <View>
                        <Text>Nombre Completo</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Nombre Completo"
                            value={email}
                            onChangeText={setEmail}
                            multiline={false}   
                            scrollEnabled={true}
                        />
                    </View>
                    <View>
                        <Text>Correo Electrónico</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='Correo electrónico'
                            value={text}
                            onChangeText={setText}
                            multiline={false}  
                            scrollEnabled={true}
                        />
                    </View>
                </View>

               <TouchableOpacity onPress={() => {
                    if(visibleTextOne == 'none'){
                        setVisibleTextOne('flex');
                    }else{
                        setVisibleTextOne('none');
                    }
               }}>
                 <Text>Ver texto </Text>
               </TouchableOpacity>

               <Text style ={{display: `${visibleTextOne}`}}> Hola como estas mi broder</Text>

               <TouchableOpacity onPress={() => setVisibleText2(visibleText2 === 'none' ? 'flex' : 'none')}>
                 <Text>Ver texto 2 </Text>
               </TouchableOpacity>

               <Text style ={{display: `${visibleText2}`}}>Segundo texto</Text>
            </ScrollView>


            {/* <TextInput
                style={styles.input}
                placeholder="Escribe algo..."
                value={text}
                onChangeText={setText}
            />

            <Text style={styles.subtitle}>Lista con FlatList:</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => ElementList(item)}
            />
 }
            {loading ? <ActivityIndicator size="large" color="blue" /> : null} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
    containerEmailAndUsername: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      input: {
        height: 40,
        width: 150,  
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        fontSize: 10
      },
      
})


/* 

 Componentes básicos

View → contenedor básico, como un div en HTML.

Text → para mostrar texto.

Image → para mostrar imágenes.

TextInput → campo de entrada de texto.

ScrollView → para scroll en la pantalla (vertical/horizontal).

FlatList → lista optimizada para grandes cantidades de datos.

SectionList → lista agrupada en secciones.

Interactividad

Button → botón básico (limitado en estilos).

TouchableOpacity → botón táctil con efecto de opacidad.

TouchableHighlight → similar, con efecto de resaltado.

Pressable → más flexible, permite manejar varios estados (pressed, hover, etc.).

Switch → interruptor (toggle on/off).

 Layout y diseño

SafeAreaView → respeta los márgenes seguros (notch, barra de estado).

KeyboardAvoidingView → ajusta la vista al aparecer el teclado.

Modal → ventana modal flotante.

StatusBar → controla la barra de estado (color, visibilidad).

 Extras útiles

ActivityIndicator → spinner de carga.

RefreshControl → usado con ScrollView o FlatList para "pull to refresh".

Alert → ventana emergente de alerta nativa.

*/