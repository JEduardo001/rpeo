import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import {UbicacionesScreen} from './screens/UbicacionesScreen.js';
import {DetailsScreen} from './screens/DirectorioScreen.js';
import {DirectorioScreen} from './screens/DirectorioScreen.js';
import {DenunciaAnonimaScreen} from "./screens/DenunciaAnonimaScreen.js"
import {PrivacidadScreen} from "./screens/PrivacidadScreen.js"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//screenOptions={{ headerShown: false }}
const Tabs = () => {
  return  (
    <Tab.Navigator  >
       <Tab.Screen name="DenunciaAnonima" component={DenunciaAnonimaScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          title: "Denuncia Anónima"
        }}
      />
      <Tab.Screen name="Ubicaciones" component={UbicacionesScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          title: "Ubicaciones"
        }}
      />
     
       <Tab.Screen name="Directorio" component={DirectorioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          title: "Directorio"
        }}
      />
       <Tab.Screen name="Privacidad" component={PrivacidadScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
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