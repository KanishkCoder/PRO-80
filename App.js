import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/home';
import starMap from './screens/starMap';
import dailyPic from './screens/dailyPic';
import spaceCrafts from './screens/spaceCrafts';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}} >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='starMap' component={starMap} />
        <Stack.Screen name='dailyPic' component={dailyPic} />
        <Stack.Screen name='spaceCrafts' component={spaceCrafts} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
