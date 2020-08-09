import React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Auth = createStackNavigator();

const AuthStack = () => (
  <Auth.Navigator headerMode="none">
    <Auth.Screen name="signin" component={SignIn} />
  </Auth.Navigator>
);

const AppStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="games" component={Games} />
    <Tab.Screen name="news" component={News} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="auth"
          component={AuthStack}
        />
        <Stack.Screen name="app" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
