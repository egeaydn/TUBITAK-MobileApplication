import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import * as Animatable from 'react-native-animatable';

export default function EventsScreen() {
  const { theme } = useTheme();
  
  // Etkinlikleri manuel olarak tanımlıyoruz
  const etkinlikler = [
    { tarih: '2023-09-05', etkinlik: 'Okul Açılış Töreni' },
    { tarih: '2023-09-15', etkinlik: 'Veli Toplantısı' },
    { tarih: '2023-10-05', etkinlik: 'Öğretmenler Günü Kutlaması' },
    { tarih: '2023-10-29', etkinlik: 'Cumhuriyet Bayramı Törenleri' },
    { tarih: '2023-11-10', etkinlik: 'Atatürk\'ü Anma Töreni' },
    { tarih: '2023-11-24', etkinlik: 'Öğretmenler Günü Programı' },
    { tarih: '2023-12-15', etkinlik: 'Yarıyıl Değerlendirme Toplantısı' },
    { tarih: '2024-01-20', etkinlik: '1. Dönem Karne Töreni' },
    { tarih: '2024-02-05', etkinlik: '2. Dönem Başlangıç Töreni' },
    { tarih: '2024-03-12', etkinlik: 'İstiklal Marşı\'nın Kabulü Kutlaması' },
    { tarih: '2024-04-05', etkinlik: 'Okul Yıl Sonu Konseri' },
    { tarih: '2024-04-10', etkinlik: 'Bilim Fuarı' },
    { tarih: '2024-04-15', etkinlik: 'Spor Şenlikleri' },
    { tarih: '2024-04-23', etkinlik: 'Ulusal Egemenlik ve Çocuk Bayramı' },
    { tarih: '2024-05-19', etkinlik: 'Gençlik ve Spor Bayramı' },
    { tarih: '2024-06-05', etkinlik: 'Yıl Sonu Pikniği' },
    { tarih: '2024-06-15', etkinlik: 'Mezuniyet Töreni' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Okul Etkinlikleri</Text>
      
      {etkinlikler.map((etkinlik, index) => (
        <Animatable.View 
          key={index} 
          animation="fadeInUp" 
          delay={index * 100}
          style={[
            styles.etkinlikContainer, 
            { 
              backgroundColor: theme.colors.card,
              borderLeftColor: theme.colors.primary,
              shadowColor: theme.isDarkMode ? '#fff' : '#000',
            }
          ]}
        >
          <Text style={[styles.tarihText, { color: theme.colors.textSecondary }]}>
            {etkinlik.tarih}
          </Text>
          <Text style={[styles.etkinlikText, { color: theme.colors.text }]}>
            {etkinlik.etkinlik}
          </Text>
        </Animatable.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 30,
    letterSpacing: 1,
  },
  etkinlikContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    borderLeftWidth: 5,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    overflow: 'hidden',
    transform: [{ scale: 0.98 }],
  },
  tarihText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  etkinlikText: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 26,
  },
});
