import {Alert} from 'react-native';

export const AlertMessage = (title, message) => {
    Alert.alert(title, message)
}