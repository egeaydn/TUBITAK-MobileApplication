import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

export default function ExamScheduleScreen() {
  const { theme } = useTheme();
  
  const exams = [
    {
      id: '1',
      subject: 'Matematik',
      date: '2023-10-05',
      time: '10:00',
      place: 'A Blok - 201',
    },
    {
      id: '2',
      subject: 'Fizik',
      date: '2023-10-12',
      time: '13:00',
      place: 'B Blok - 105',
    },
    {
      id: '3',
      subject: 'Kimya',
      date: '2023-10-19',
      time: '09:30',
      place: 'C Blok - 302',
    },
    {
      id: '4',
      subject: 'Biyoloji',
      date: '2023-10-26',
      time: '11:00',
      place: 'B Blok - 203',
    },
    {
      id: '5',
      subject: 'Türkçe',
      date: '2023-11-02',
      time: '09:00',
      place: 'A Blok - 104',
    },
    {
      id: '6',
      subject: 'Tarih',
      date: '2023-11-09',
      time: '14:30',
      place: 'C Blok - 301',
    },
    {
      id: '7',
      subject: 'Coğrafya',
      date: '2023-11-16',
      time: '10:30',
      place: 'A Blok - 305',
    },
    {
      id: '8',
      subject: 'İngilizce',
      date: '2023-11-23',
      time: '09:00',
      place: 'B Blok - 202',
    },
  ];

  const renderItem = ({ item, index }) => (
    <Animatable.View 
      animation="fadeInUp" 
      delay={index * 100}
      style={[styles.card, { backgroundColor: theme.colors.card }]}
    >
      <View style={[styles.subjectIcon, { backgroundColor: theme.colors.primary }]}>
        <Ionicons name="document-text" size={24} color="#fff" />
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.subject, { color: theme.colors.text }]}>{item.subject}</Text>
        <Text style={[styles.details, { color: theme.colors.textSecondary }]}>
          <Ionicons name="calendar-outline" size={14} color={theme.colors.textSecondary} /> {item.date}
        </Text>
        <Text style={[styles.details, { color: theme.colors.textSecondary }]}>
          <Ionicons name="time-outline" size={14} color={theme.colors.textSecondary} /> {item.time}
        </Text>
        <Text style={[styles.details, { color: theme.colors.textSecondary }]}>
          <Ionicons name="location-outline" size={14} color={theme.colors.textSecondary} /> {item.place}
        </Text>
      </View>
    </Animatable.View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Sınav Takvimi</Text>
      <FlatList
        data={exams}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    marginTop: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  subjectIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  subject: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
});
