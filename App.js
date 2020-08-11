import * as React from 'react';
import { 
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { PADDING } from './constants';

import Setting from './screens/SettingScreen';
import LoginScreen from './screens/LoginScreen';
import SignInScrenn from './screens/SignInScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="setting" 
          component={Setting} 
          options={{
            title: 'Cá Nhân',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <TouchableOpacity>
                <Feather name='settings' color='#E62E5E' size={24} style={{ paddingRight: PADDING }}/>
              </TouchableOpacity>
            ),
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;