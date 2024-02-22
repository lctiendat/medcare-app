import * as React from 'react';

import {AccountTypeScreen, WelcomeScreen} from './src/sceens';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {SignIn, Home as HomeClient} from './src/sceens/Client';

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen name="Settings" component={HomeClient} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={AccountTypeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomeClient" component={HomeClient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
