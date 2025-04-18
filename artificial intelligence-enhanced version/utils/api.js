// API utilities for fetching data

// Fetch teachers data
export const fetchTeachers = async () => {
  try {
    const response = await fetch('https://www.freetestapi.com/api/v1/teachers');
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching teachers:', error);
    throw error;
  }
};

// Fetch school news data (would be connected to an API in a real app)
export const fetchNews = async () => {
  // This would typically be an API call
  // For the demo, we'll return mock data
  const mockNews = [
    {
      id: 1,
      title: "Okulumuz Kartepe Gezisi",
      details: "Okulumuzun düzenlediği Kartepe gezisi büyük bir başarıyla tamamlandı. Öğrencilerimiz, muhteşem doğa manzaraları eşliğinde keyifli vakit geçirdi. Gezide kayak yapma fırsatı bulan öğrencilerimiz, kış sporlarına olan ilgilerini artırdı. Ayrıca, doğa yürüyüşü ve kar aktiviteleri ile unutulmaz anılar biriktirdiler. Bu gezi, öğrencilerimizin hem sosyal gelişimine katkı sağladı hem de doğa bilincini artırdı.",
      imageUrl: "https://source.unsplash.com/random/800x600/?winter,snow"
    },
    {
      id: 2,
      title: "1. Dönem Sonu Etkinlik Programımız",
      details: "1. dönem sonu etkinliklerimiz kapsamında birbirinden renkli aktiviteler düzenlendi. Programımızda öğrenci konserimiz, resim sergimiz ve spor müsabakaları yer aldı. Öğrencilerimizin yeteneklerini sergilediği konser büyük beğeni topladı. Resim sergisinde genç sanatçılarımızın eserleri görücüye çıktı. Spor müsabakalarında ise centilmence bir rekabet yaşandı.",
      imageUrl: "https://source.unsplash.com/random/800x600/?concert,art"
    },
    {
      id: 3,
      title: "Okulumuzda Futbol Turnuvası Yapıldı",
      details: "Geleneksel futbol turnuvamız bu yıl da büyük bir heyecanla gerçekleşti. Sınıflar arası düzenlenen turnuvada kıyasıya mücadeleler yaşandı. Final maçı özellikle nefes kesiciydi. Turnuva boyunca fair-play ruhu ön plandaydı. Dereceye giren takımlara ödülleri törenle verildi. Bu etkinlik, öğrencilerimiz arasında dostluk bağlarının güçlenmesine vesile oldu.",
      imageUrl: "https://source.unsplash.com/random/800x600/?football,soccer"
    },
    {
      id: 4,
      title: "Tüketici Hakları Semineri",
      details: "Okulumuzda düzenlenen Tüketici Hakları Semineri'nde öğrencilerimiz bilinçli tüketim konusunda bilgilendirildi. Uzman konuşmacılar eşliğinde gerçekleşen seminerde, tüketici hakları, alışveriş yaparken dikkat edilmesi gerekenler ve bilinçli tüketimin önemi gibi konular ele alındı. İnteraktif geçen seminerde öğrencilerimiz sorularıyla aktif katılım gösterdi.",
      imageUrl: "https://source.unsplash.com/random/800x600/?seminar,classroom"
    }
  ];

  return mockNews;
};

// Other API utilities can be added as needed
