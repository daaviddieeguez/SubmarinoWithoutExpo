// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GameScreen from './screens/GameScreen';
import ConfigScreen from './screens/ConfigScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name='Submarino' component={GameScreen} />
      <Tab.Screen name='Config' component={ConfigScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}