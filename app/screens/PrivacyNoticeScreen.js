
import React, { Component, useState } from 'react';
import {View,Text,StyleSheet, TouchableOpacity,ScrollView} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { nameResponsity,addressResponsity,purposePersonalData 
    ,transferPersonalData,rightARCO
} from '../constants/texts/constantsPrivacyNotice/text.js';

export const PrivacyNoticeScreen = ({ navigation }) => {
    const noTextVisible = "none"
    const textVisible = "flex"

    const [visibleNameResponsity, setVisibleNameResponsity] = useState(noTextVisible)
    const [visibleAddresssPersonResponsible, setVisibleAddresPersonResponsible] = useState(noTextVisible)
    const [visiblePurposePersonalData, setVisiblePurposePersonalData] = useState(noTextVisible)
    const [visiblePersonalDataWillBeUsed, setVisiblePersonalDataWillBeUsed] = useState(noTextVisible)
    const [visibleTransferPersonalData, setVisibleTransferPersonalData] = useState(noTextVisible)
    const [visibleRightARCO, setVisibleRightARCO] = useState(noTextVisible)

    const colorIcon = "black"
    const sizeIcon = 20

    const ComponentPersonalDataWillBeUsed = () => {
        return  (
            <View>
                <View>
                    <TouchableOpacity style={styles.btnShowTextSection}  onPress={() => {visiblePersonalDataWillBeUsed === "flex" ? setVisiblePersonalDataWillBeUsed(noTextVisible) : setVisiblePersonalDataWillBeUsed(textVisible)}}>
                        <Text  style = {styles.textSubcontentSection}>Datos personales que serán utilizados:</Text>
                        <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                    </TouchableOpacity>
                    {
                        (visiblePersonalDataWillBeUsed === "flex") 
                        ? 
                            <View>
                                <Text  style={styles.textSubContent}>
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
                                <Text></Text>
                                <Text  style={styles.textSubContent}>1. La obtención del consentimiento de los padres y tutores.</Text>
                                <Text></Text>
                                <Text  style={styles.textSubContent}>2. La verificación de la autenticidad del consentimiento otorgado.</Text>
                                <Text></Text>
                                <Text  style={styles.textSubContent}>3. La implementación y mantenimiento de medidas de seguridad más estrictas a
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


    const ComponentSubTextSection = (descriptionSection,TitleSection,controllerVisibleText,functionController) => {
        return  (
            <View>
                <View>
                    <TouchableOpacity style={styles.btnShowTextSection}  onPress={() => {controllerVisibleText === "flex" ? functionController(noTextVisible) : functionController(textVisible)}}>
                        <Text  style = {styles.textSubcontentSection}>{TitleSection}</Text>
                        <Icon name="angle-right" color={colorIcon} size={sizeIcon} />

                    </TouchableOpacity>
                    {
                        (controllerVisibleText === "flex") 
                        ? 
                            <View>
                                <Text  style={styles.textSubContent}>
                                   {descriptionSection}
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
                {ComponentSubTextSection(nameResponsity.description,nameResponsity.title,visibleNameResponsity,setVisibleNameResponsity)}
                {ComponentSubTextSection(addressResponsity.description,addressResponsity.title,visibleAddresssPersonResponsible,setVisibleAddresPersonResponsible)}
                {ComponentPersonalDataWillBeUsed()}
                {ComponentSubTextSection(purposePersonalData.description,purposePersonalData.title,visiblePurposePersonalData,setVisiblePurposePersonalData)}
                {ComponentSubTextSection(transferPersonalData.description,transferPersonalData.title,visibleTransferPersonalData,setVisibleTransferPersonalData)}
                {ComponentSubTextSection(rightARCO.description,rightARCO.title,visibleRightARCO,setVisibleRightARCO)}
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
        marginLeft: 25,
        marginRight: 25
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