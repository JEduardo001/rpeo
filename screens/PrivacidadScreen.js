
import React, { useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const PrivacidadScreen = ({ navigation }) => {
    const [visibleNameResponsity, setVisibleNameResponsity] = useState('none')
    const [visibleAddresssPersonResponsible, setVisibleAddresPersonResponsible] = useState('none')

    const colorIcon = "black"
    const sizeIcon = 20

    const ComponentNameResponity = () => {
       return (
        <View>
            <TouchableOpacity style={styles.btnShowTextSection}  onPress={() => {visibleNameResponsity === "flex" ? setVisibleNameResponsity("none") : setVisibleNameResponsity("flex")}}>
                    <Text  style = {styles.textSubcontentSection}>Nombre del responsable:</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />
                
            </TouchableOpacity>
            {
                ( visibleNameResponsity === "flex")
                ? 
                    <Text style={styles.textSubContent}>
                        Procuraduría General de Justicia del Estado de Baja California Sur.
                    </Text>
                : null
            }
        </View>
       )
    }
    const ComponentDomicilioResponsable = () => {
        return (
            <View>
                <TouchableOpacity style={styles.btnShowTextSection}  onPress={() => setVisibleAddresPersonResponsible("flex")}>
                    <Text  style = {styles.textSubcontentSection}>Domicilio del Responsable:</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                </TouchableOpacity>
                {
                    (visibleAddresssPersonResponsible === "flex") 
                    ? 
                     <Text>
                      Boulevard Luis Donaldo Colosio y Antonio Álvarez Rico, Col. Emiliano Zapata, La
                      Paz, Baja California Sur, C.P. 23070. 

                     </Text>
                     : null

                }
            </View>
        )
    }

    const ComponentUtilidadFinal = () => {
        return (
            <View>
                <View>
                    <TouchableOpacity style={styles.btnShowTextSection}  onPress={() => setVisibleAddresPersonResponsible("flex")}>
                        <Text  style = {styles.textSubcontentSection}>Finalidad para la cual serán utilizados los datos personales:</Text>
                        <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                    </TouchableOpacity>
                    {
                        (visibleAddresssPersonResponsible === "flex") 
                        ? 
                        <Text>
                            Los datos personales serán utilizados exclusivamente para la procuración de
                            justicia: prevención, investigación y persecución de los delitos, con absoluto apego
                            al marco legal y a los derechos fundamentales.
                            Esta autoridad no estará obligada a recabar el consentimiento del titular en los casos
                            previstos en el artículo 22 de la Ley General de Protección de Datos Personales en
                            Posesión de Sujetos Obligados.

                        </Text>
                        : null

                    }
                </View>
            </View>
        )
    }

    const componentDataPersonal = () => {
        return  (
            <View>
                <View>
                    <TouchableOpacity style={styles.btnShowTextSection}  onPress={() => setVisibleAddresPersonResponsible("flex")}>
                        <Text  style = {styles.textSubcontentSection}>Datos personales que serán utilizados:</Text>
                        <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                    </TouchableOpacity>
                    {
                        (visibleAddresssPersonResponsible === "flex") 
                        ? 
                            <View>
                                <Text>
                                    Para poder cumplir con la finalidad de este sujeto obligado, se recabarán de forma
                                    necesaria y proporcional, datos personales de identificación, contacto, laborales, 
                                    académicos, patrimoniales. Así mismo de ser necesario, aquellos datos personales
                                    sensibles como aspectos de origen racial o étnico, salud, información genética, para
                                    la persecución de delitos, los cuales serán resguardados en los archivos de esta
                                    institución, garantizando la integridad, disponibilidad, y confidencialidad de la
                                    información, protegiéndolos contra daño, perdida, alteración destrucción o el uso,
                                    acceso, o tratamiento no autorizado.
                                    Es de especial interés cuidar la información personal de los menores de edad,
                                    personas en estado de interdicción y capacidades diferentes en los términos de Ley,
                                    a través del establecimiento de medidas específicas, como son:
                                </Text>
                                <Text>La obtención del consentimiento de los padres y tutores.</Text>
                                <Text>La verificación de la autenticidad del consentimiento otorgado.</Text>
                                <Text>La implementación y mantenimiento de medidas de seguridad más estrictas a
                                            efecto de asegurar la confidencialidad de los menores y personas en estado de
                                            interdicción y capacidades especiales.
                                </Text>
                            </View>
                            
                        : null

                    }
                </View>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
                <Text style ={styles.textTitle}>Aviso de Privacidad Integral de la Procuraduría General de Justicia del Estado de Baja California Sur</Text>
                <Text style ={styles.textSubtitle}>
                    La Procuraduría General de Justicia del Estado de Baja California Sur, dependencia del
                    Ejecutivo del Estado, de conformidad con el artículo 6 de la Constitución Política de los
                    Estados Unidos Mexicanos, 13 apartado B de la Constitución Política del Estado Libre y
                    Soberano de Baja California Sur, 1, 2 fracciones II, III, IV, V, 3 fracción II, 11, 16, 18, 20, 21,
                    22, 23, 38 y demás relativos y aplicables de la Ley de Protección de Datos Personales en
                    Posesión de Sujetos Obligados para el Estado de Baja California Sur, al respecto le
                    informamos lo siguiente:
                </Text>
               
               {ComponentNameResponity()}

               {ComponentDomicilioResponsable()}
                <TouchableOpacity style={styles.btnShowTextSection} onPress={() => setVisibleNameResponsity()}>
                    <Text  style = {styles.textSubcontentSection}>Finalidad para la cual serán utilizados los datos personales:</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnShowTextSection} onPress={() => setVisibleNameResponsity()}>
                    <Text  style = {styles.textSubcontentSection}>Datos personales que serán utilizados:</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnShowTextSection} onPress={() => setVisibleNameResponsity()}>
                    <Text  style = {styles.textSubcontentSection}>Transferencia de datos personales {"(con quien se comparte y para qué fin):"}</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnShowTextSection} onPress={() => setVisibleNameResponsity()}>
                    <Text  style = {styles.textSubcontentSection}>Mecanismos, medios y procedimientos disponibles para ejercer los derechos ARCO:</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                </TouchableOpacity>

                <TouchableOpacity style={styles.btnShowTextSection} onPress={() => setVisibleNameResponsity()}>
                    <Text style = {styles.textSubcontentSection}>Mecanismos, medios y procedimientos disponibles para ejercer los derechos ARCO:</Text>
                    <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    textTitle: {
        fontSize: 22,
        marginBottom: 20,
    },
    textSubtitle: {
        fontSize: 15,
        marginBottom: 20,
    },
    textSubContent: {
        fontSize: 15,
        marginLeft: 25

    },
    textSubcontentSection: {
        width: "90%",
    },
    btnShowTextSection: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgb(224, 224, 224)",
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    }
})