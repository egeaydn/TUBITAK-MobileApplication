import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import TeacherLoginScreen from '../screens/TeacherLoginScreen';
import DrawerRoutes from './DrawerRoutes';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Öğretmen" component={TeacherLoginScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
            <Stack.Screen 
              name="Details" 
              component={DetailsScreen}
              options={{ 
                headerShown: false,
                presentation: 'modal'
              }} 
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
