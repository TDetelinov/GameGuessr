import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';

// Pantalles
import HomeScreen from './screens/HomeScreen';
import LevelScreen from './screens/LevelScreen';
import ResultsScreen from './screens/ResultsScreen';
import { db } from './firebase';
console.log("DB:", db);


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ Righteous_400Regular });
  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Level" component={LevelScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
