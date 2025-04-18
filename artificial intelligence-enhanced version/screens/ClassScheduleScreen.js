import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import DersProgrami from '../components/DersProgrami';

export default function ClassScheduleScreen() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <DersProgrami />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
