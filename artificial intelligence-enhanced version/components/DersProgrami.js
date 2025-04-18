import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const DersProgrami = () => {
  const { theme } = useTheme();
  const [selectedClass, setSelectedClass] = useState('9'); // Başlangıç olarak 9. sınıf
  const [selectedSubClass, setSelectedSubClass] = useState('A'); // Başlangıç olarak A şubesi seçili

  // Ders programları verisi, her sınıf ve şube için farklı dersler
  const dersProgramlari = {
    '9': {
      'A': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'B': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'C': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'D': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
    },
    '10': {
      'A': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'B': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'C': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'D': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
    },
    '11': {
      'A': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'B': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'C': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'D': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
    },
    '12': {
      'A': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih','Felsefe'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'B': {
        Pazartesi: ['Rehberlik', 'Edebiyat', 'Edebiyat', 'Web Projesi', 'Web Projesi', 'Web Projesi', 'Web Projesi', 'Web Yazılım', 'Web Yazılım', 'Web Yazılım'],
        Salı: ['Din K.', 'Din K.', 'İngilizce', 'İngilizce', 'İnkılap Tarhi ve ATATÜRKÇÜLÜK', 'İnkılap Tarhi ve ATATÜRKÇÜLÜK', 'Edebiyat', 'Edebiyat', 'Edebiyat'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih','Felsefe'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'C': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
      'D': {
        Pazartesi: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Salı: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Çarşamba: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
        Perşembe: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih','Felsefe'],
        Cuma: ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Sosyal Bilgiler', 'İngilizce', 'Din Kültürü', 'Tarih'],
      },
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: theme.colors.text }]}>Ders Programı</Text>
      </View>

      {/* Sınıf ve Şube Seçme Kısımları */}
      <View style={styles.classSelector}>
        {['9', '10', '11', '12'].map((classLevel) => (
          <TouchableOpacity
            key={classLevel}
            style={[
              styles.classButton,
              selectedClass === classLevel ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.card }
            ]}
            onPress={() => setSelectedClass(classLevel)}
          >
            <Text style={[styles.classButtonText, { color: theme.colors.text }]}>
              {classLevel}. Sınıf
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Şube Seçme Kısmı */}
      <View style={styles.subClassSelector}>
        {Object.keys(dersProgramlari[selectedClass]).map((subClass) => (
          <TouchableOpacity
            key={subClass}
            style={[
              styles.classButton,
              selectedSubClass === subClass ? { backgroundColor: theme.colors.primary } : { backgroundColor: theme.colors.card }
            ]}
            onPress={() => setSelectedSubClass(subClass)}
          >
            <Text style={[styles.classButtonText, { color: theme.colors.text }]}>
              {subClass} Şubesi
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Seçilen Sınıf ve Şube Ders Programı */}
      <View style={styles.dersProgrami}>
        <Text style={[styles.dersBaslik, { color: theme.colors.text }]}>
          {selectedClass}. Sınıf {selectedSubClass} Şubesi Ders Programı
        </Text>

        {/* Haftanın günleri */}
        {Object.keys(dersProgramlari[selectedClass][selectedSubClass]).map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={[styles.dayText, { color: theme.colors.text }]}>
              {day}:
            </Text>
            {dersProgramlari[selectedClass][selectedSubClass][day].map((ders, index) => (
              <View key={index} style={[styles.dersItem, { backgroundColor: theme.colors.card }]}>
                <Text style={[styles.dersText, { color: theme.colors.textSecondary }]}>{ders}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  classSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subClassSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  classButton: {
    padding: 10,
    borderRadius: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  classButtonText: {
    fontWeight: '600',
  },
  dersProgrami: {
    marginBottom: 50,
  },
  dersBaslik: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  dayContainer: {
    marginBottom: 25,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dersItem: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  dersText: {
    fontSize: 15,
  },
});

export default DersProgrami;
