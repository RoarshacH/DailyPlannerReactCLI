import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Fonts
import {FaHome, FaList, FaRegCalendarAlt, FaSignOutAlt} from 'react-icons/fa';

// Pages
import HomeScreen from '../screens/Home';
import ScrollViewScreen from '../screens/Scrolling';
import CalandarScreen from '../screens/CalandarScreen';
import {LogoutScreen} from '../components/logoutScreen';

const Tab = createBottomTabNavigator();

export const BottomNavigator = ({route}) => {
  const username = route.params.username;

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
        tabBarStyle: {backgroundColor: '#4A57A3', padding: 2, height: 60},
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home Screen',
          tabBarIcon: ({color}) => (
            <FaHome name="home" size={24} color={'white'} />
          ),
        }}
        initialParams={{username: username}}
      />
      <Tab.Screen
        name="calendar"
        component={CalandarScreen}
        options={{
          title: 'Calendar View',
          tabBarIcon: () => (
            <FaRegCalendarAlt name="calendar" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="listView"
        component={ScrollViewScreen}
        options={{
          title: 'List All Tasks',
          tabBarIcon: ({color}) => (
            <FaList name="list" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="logout"
        component={LogoutScreen}
        options={{
          title: 'Profile',
          tabBarIcon: () => (
            <FaSignOutAlt name="log-out" size={24} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
