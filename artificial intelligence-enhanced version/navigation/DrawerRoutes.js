import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import ClassScheduleScreen from '../screens/ClassScheduleScreen';
import TeacherDirectoryScreen from '../screens/TeacherDirectoryScreen';
import EventsScreen from '../screens/EventsScreen';
import ExamScheduleScreen from '../screens/ExamScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        drawerActiveTintColor: theme.colors.primary,
        drawerInactiveTintColor: theme.colors.text,
        drawerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Drawer.Screen
        name="Ana Sayfa"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Ders Programı"
        component={ClassScheduleScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Öğretmenler"
        component={TeacherDirectoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Etkinlikler"
        component={EventsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="megaphone" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sınav Takvimi"
        component={ExamScheduleScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="document-text" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
