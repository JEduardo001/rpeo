import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import {LocationsScreen} from './app/screens/LocationsScreen.js';
import {PhoneDirectoryScreen} from './app/screens/PhoneDirectoryScreen.js';
import {AnonymousReportScreen} from "./app/screens/AnonymousReportScreen.js"
import {PrivacyNoticeScreen} from "./app/screens/PrivacyNoticeScreen.js"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//screenOptions={{ headerShown: false }}
const Tabs = () => {
  return  (
    <Tab.Navigator  >
       <Tab.Screen name="AnonymousReport" component={AnonymousReportScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle-outline" color={color} size={size} />
          ),
          title: "Denuncia Anónima"
        }}
      />
      <Tab.Screen name="Ubicaciones" component={LocationsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" color={color} size={size} />
          ),
          title: "Ubicaciones"
        }}
      />
     
       <Tab.Screen name="Directorio" component={PhoneDirectoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          ),
          title: "Directorio"
        }}
      />
       <Tab.Screen name="Privacidad" component={PrivacyNoticeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
          title: "Aviso de Privacidad"
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

{/*         <Stack.Screen name="extra" component={AccaScreen} />
 */} 