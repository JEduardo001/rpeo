import {View,Text} from "react-native";


export const AccaScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'black' }}>Estas en Acca</Text>
        </View>
    );
}