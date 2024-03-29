/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

// Screens
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUP';
import {BottomNavigator} from './src/navigator/bottomNavigator';
import AddTaskScreen from './src/screens/AddTask';
import Onboarding_1 from './src/screens/Onboarding_1';
import Onboarding_2 from './src/screens/Onboarding_2';
import Onboarding_3 from './src/screens/Onboarding_3';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppStateProvider from './src/providers/AppState';

const MainStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStateProvider>
        <MainStack.Navigator
          initialRouteName="Onboarding_1"
          screenOptions={{headerShown: false}}>
          <MainStack.Screen name="login" component={LoginScreen} />
          <MainStack.Screen name="signUp" component={SignUpScreen} />
          <MainStack.Screen name="bottomNav" component={BottomNavigator} />
          <MainStack.Screen name="addTask" component={AddTaskScreen} />
          <MainStack.Screen name="Onboarding_1" component={Onboarding_1} />
          <MainStack.Screen name="Onboarding_2" component={Onboarding_2} />
          <MainStack.Screen name="Onboarding_3" component={Onboarding_3} />
        </MainStack.Navigator>
      </AppStateProvider>
    </NavigationContainer>
  );
};

export default App;
