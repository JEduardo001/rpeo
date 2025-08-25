import { apiUrl } from "../../constants/api.js"
import { successReport } from "../../constants/texts/constantsAnonymousReport/text.js";
import {AlertMessage} from '../alertMessage.js'

import { 
    titleSuccessReport, 
    subtitleSuccessReport, 
    titleIncompleteFields, 
    subtitleIncompleteFields, 
    titleErrorSendReport, 
    subtitleErrorSendReport, 
    subtitleIncompleteFieldIdentifier,
    messageNotValidEmail,
    messageNotValidPhoneNumber
} from '../../constants/texts/constantsAnonymousReport/text.js';
import {validateEmail,validatePhoneNumber} from './validationsForm.js';

export const validateDataForm = async(reportData) => {
    const { nombre, correo, celular, descripcion,localidad, colonia,calles } = reportData;

    if(correo && !validateEmail(correo)){
        AlertMessage(titleIncompleteFields, messageNotValidEmail)
        return
    }
    if(celular && !validatePhoneNumber(celular)){
        AlertMessage(titleIncompleteFields, messageNotValidPhoneNumber)
        return
    }
    if(!correo && !celular){
        AlertMessage(titleIncompleteFields, subtitleIncompleteFieldIdentifier)
        return
    }
    if (!nombre || !descripcion, !localidad, !colonia, !calles) {
        AlertMessage(titleIncompleteFields,subtitleIncompleteFields)
        return
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    //onsole.log('data ::: ', reportData)
    const response = await sendAnonymousReport(reportData)
    if(!response.success){
        AlertMessage(titleErrorSendReport,subtitleErrorSendReport)
        return
    } 
    AlertMessage(titleSuccessReport, subtitleSuccessReport) 
 
}//getDenunciabyFolio

export const sendAnonymousReport = async (reportData) => {
    try {

        const response = await fetch(apiUrl + '/sendDenuncia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: reportData
        })
        console.log("response: ", response)
        if(!response.ok){
            throw new Error();
        }

        const data = await response.json();
        console.log("formulario enviado correctamente: ", data)
        return {
            success: true,
            message: "Denuncia enviada correctamente"
        }
        
    }catch(error){
        console.error("Error sending anonymous report:", error);
        return {
            success: false,
            message: error.message || "Ocurrió un error al enviar la denuncia"
        }
    }
}