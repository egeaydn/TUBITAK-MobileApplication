import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';

const { width } = Dimensions.get('window');

const newsData = [
  {
    id: 1,
    title: "Okulumuz Kış Kampı",
    details: "Okulumuzun düzenlediği kış kampı büyük bir başarıyla tamamlandı. Öğrencilerimiz, muhteşem doğa manzaraları eşliğinde keyifli vakit geçirdi. Kampımızda kayak yapma fırsatı bulan öğrencilerimiz, kış sporlarına olan ilgilerini artırdı. Ayrıca, doğa yürüyüşü ve kar aktiviteleri ile unutulmaz anılar biriktirdiler. Bu etkinlik, öğrencilerimizin hem sosyal gelişimine katkı sağladı hem de doğa bilincini artırdı.",
    imageUrl: require('../assets/h1.jpg')
  },
  {
    id: 2,
    title: "1. Dönem Sonu Faaliyet Haftası",
    details: "1. dönem sonu etkinliklerimiz kapsamında birbirinden renkli aktiviteler düzenlendi. Programımızda kelime oyunu, gezi, spor saatleri ve film gösterimi gibi çeşitli etkinlikler yer aldı. General Ali Riza Ersin Mesleki ve Teknik Anadolu Lisesi olarak öğrencilerimizin sosyal ve kültürel gelişimine katkı sağlamayı hedefliyoruz.",
    imageUrl: require('../assets/h2.jpg')
  },
  {
    id: 3,
    title: "Okulumuzda Futbol Turnuvası",
    details: "Geleneksel futbol turnuvamız bu yıl da büyük bir heyecanla gerçekleşti. Sınıflar arası düzenlenen turnuvada kıyasıya mücadeleler yaşandı. Final maçı özellikle nefes kesiciydi. Turnuva boyunca fair-play ruhu ön plandaydı. Takımlarımız büyük bir sportmenlik örneği sergiledi. Bu etkinlik, öğrencilerimiz arasında dostluk bağlarının güçlenmesine vesile oldu.",
    imageUrl: require('../assets/h3.jpg')
  },
  {
    id: 4,
    title: "Siber Güvenlik Semineri",
    details: "Okulumuzda düzenlenen Siber Güvenlik Semineri'nde öğrencilerimiz internet güvenliği konusunda bilgilendirildi. Uzman konuşmacılar eşliğinde gerçekleşen seminerde, kişisel verilerin korunması, güvenli internet kullanımı ve olası tehditler gibi konular ele alındı. İnteraktif geçen seminerde öğrencilerimiz sorularıyla aktif katılım gösterdi.",
    imageUrl: require('../assets/h4.jpg')
  }
];

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme();
  const { userInfo } = useAuth();

  const handleCardPress = (item) => {
    navigation.navigate('Details', {
      title: item.title,
      details: item.details,
      imageUrl: item.imageUrl
    });
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.header, { 
        backgroundColor: theme.colors.card,
        borderBottomColor: theme.colors.border 
      }]}>
        <Text style={[styles.welcomeText, { color: theme.colors.text }]}>
          Hoş geldiniz, {userInfo?.name || 'Öğrenci'}
        </Text>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          Okul Haberleri
        </Text>
        <Text style={[styles.headerSubtitle, { color: theme.colors.textSecondary }]}>
          En son gelişmeler ve etkinlikler
        </Text>
      </View>

      <View style={styles.cardsContainer}>
        {newsData.map((item, index) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            onPress={() => handleCardPress(item)}
            theme={theme}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    paddingTop: 20,
    borderBottomWidth: 1,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  cardsContainer: {
    padding: 16,
    paddingBottom: 32,
  },
});
