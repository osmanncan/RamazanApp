import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Gunler = [
  { id: 1, ad: "Regaip Kandili", tarih: "22 Ocak 2026, Perşembe" },
  { id: 2, ad: "Miraç Kandili", tarih: "15 Şubat 2026, Pazar" },
  { id: 3, ad: "Berat Kandili", tarih: "3 Mart 2026, Salı" },
  { id: 4, ad: "Ramazan Başlangıcı", tarih: "19 Mart 2026, Perşembe" },
  { id: 5, ad: "Kadir Gecesi", tarih: "13 Nisan 2026, Pazartesi" },
  { id: 6, ad: "Ramazan Bayramı", tarih: "18 Nisan 2026, Cumartesi" },
  { id: 7, ad: "Kurban Bayramı", tarih: "25 Haziran 2026, Perşembe" },
  { id: 8, ad: "Hicri Yılbaşı", tarih: "16 Temmuz 2026, Perşembe" },
  { id: 9, ad: "Aşure Günü", tarih: "25 Temmuz 2026, Cumartesi" },
  { id: 10, ad: "Mevlid Kandili", tarih: "24 Eylül 2026, Perşembe" },
];

const İslamDays = () => {
   return (
<View style={styles.container}>
<Text style={styles.pageTitle}>Dini Takvim</Text>
<ScrollView showsVerticalScrollIndicator={false}>{Gunler.map((gun) => (
<View key={gun.id} style={styles.card}>
<View style={styles.iconContainer}>
<Ionicons name="moon" size={32} color="#FACC15" />
</View>
<View style={styles.textContainer}>
<Text style={styles.gunText}>{gun.ad}</Text>
<Text style={styles.tarihText}>{gun.tarih}</Text>
</View>
</View>
))}</ScrollView>
</View>
);
}; 

export default İslamDays;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // Koyu Lacivert Arkaplan
    padding: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EAB308', // Altın Sarısı
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row', // Yan yana dizmek için
    alignItems: 'center', // Dikeyde ortalamak için
    backgroundColor: '#1E293B', // Kart rengi
    borderRadius: 12,
    padding: 16,
    marginBottom: 12, // Kartlar arası boşluk
    borderWidth: 1,
    borderColor: '#334155', // İnce gri çerçeve
  },
  iconContainer: {
    backgroundColor: '#334155', // İkonun arkasındaki yuvarlak gri alan
    padding: 12,
    borderRadius: 50, // Tam yuvarlak yapar
    marginRight: 16, // Yazı ile arayı açar
  },
  textContainer: {
    flex: 1, // Kalan boşluğu doldur
  },
  gunText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tarihText: {
    color: '#94A3B8', // Daha soluk gri
    fontSize: 13,
    marginTop: 4,
  },
});