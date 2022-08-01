import React, {Component} from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Fonts
import AntIcon from 'react-native-vector-icons/AntDesign';

if (Platform.OS === 'ios') {
  //Load fonts if using use_frameworks
  AntIcon.loadFont();
}

// Pages
import HomeScreen from '../screens/Home';
import ScrollViewScreen from '../screens/Scrolling';
import CalandarScreen from '../screens/CalandarScreen';
import {LogoutScreen} from '../components/logoutScreen';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'home'}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#4A57A3',
          height: 200,
        },
        headerTitleStyle: {
          color: 'white',
          fontSize: 24,
        },
        tabBarStyle: {
          backgroundColor: '#4A57A3',
          padding: 2,
          height: Platform.OS === 'android' ? 60 : 100,
        },
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home Screen',
          tabBarIcon: ({color}) => <AntIcon name="home" size={32} />,
        }}
      />
      <Tab.Screen
        name="calendar"
        component={CalandarScreen}
        options={{
          title: 'Calendar View',
          tabBarIcon: ({color}) => <AntIcon name="calendar" size={32} />,
        }}
      />
      <Tab.Screen
        name="listView"
        component={ScrollViewScreen}
        options={{
          title: 'List All Tasks',
          tabBarIcon: ({color}) => <AntIcon name="profile" size={32} />,
        }}
      />
      <Tab.Screen
        name="logout"
        component={LogoutScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <AntIcon name="logout" size={32} />,
        }}
      />
    </Tab.Navigator>
  );
};
