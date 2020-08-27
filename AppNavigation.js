import * as React from 'react';
import { 
  View,
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Feather from 'react-native-vector-icons/Feather';

import { useSelector, } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const LoginStack = createStackNavigator();

import Setting from './screens/Setting';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

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
        headerTransparent: true,
      }}
    >
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
      <ProfileStack.Screen name="Setting" component={Setting} />
    </ProfileStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerTitle: null,
          headerTransparent: true,
        }}
      >
        <LoginStack.Screen name="Welcome" component={Welcome} />
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="SignUp" component={SignUp} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

function AppNavigation() {
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  console.log(isLogin);
  return (
    isLogin ? 
    ( <NavigationContainer>
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
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Trips" component={Trips} />
        <Tab.Screen name="Profile" component={ProfileStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer> ) : (
      <LoginStackScreen />
    )
  );
}

export default AppNavigation;