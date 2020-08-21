import * as React from 'react';
import { 
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

import { PADDING } from './constants';

import Setting from './screens/Setting';
import Login from './screens/Login';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import { StatusBar } from 'expo-status-bar';

function Explore() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Explore</Text>
    </View>
  );
}

function Trips() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Trips!</Text>
    </View>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitle: null,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="Setting" component={Setting} />
    </ProfileStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Explore') {
              return (
                <Feather
                  name= 'search'
                  size={size}
                  color='#68d3c2'
                />
              );
            } else if (route.name === 'Trips') {
              return (
                <Feather
                  name= 'heart'
                  size={size}
                  color='#68d3c2'
                />
              );
            } else if (route.name === 'Profile') {
              return (
                <Feather
                  name= 'user'
                  size={size}
                  color='#68d3c2'
                />
              );
            }
          },
        })}
      >
        <Tab.Screen name="Explore" component={SignIn} />
        <Tab.Screen name="Trips" component={Trips} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;