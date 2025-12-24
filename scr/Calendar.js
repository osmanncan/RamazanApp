import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';

const Calendar = ({ loading, monthlySchedule = [], navigation }) => {

if (loading) {
return (
<View style={styles.loadingContainer}>
<ActivityIndicator size="large" color="#EAB308" />
<Text style={{ color: 'white', marginTop: 10 }}>Vakitler Yükleniyor...</Text>
</View>
);
}
return (
  
<View style={styles.container}>
<Text style={styles.title}>Aylık Namaz Vakitleri</Text>

<ScrollView style={styles.scrollView}>
{monthlySchedule.map((gun, index) =>{
const vakitler = gun.timings;

const turkceAylar = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const gunBilgisi = gun.date.gregorian;
const gunNumarasi = gunBilgisi.day;
const ayNumarasi = gunBilgisi.month.number;
const yil = gunBilgisi.year;

const tarih = `${gunNumarasi} ${turkceAylar[ayNumarasi - 1]} ${yil}`;

return (
<View key={index} style={styles.card}>
<View style={styles.cardHeader}>
<Text style={styles.dateText}>{tarih}</Text>
</View>
<View style={styles.timesContainer}>
<View style={styles.timeBox}>
<Text style={styles.timeLabel}>İmsak</Text>
<Text style={styles.timeValue}>{vakitler.Fajr.split(' ')[0]}</Text>
</View>

<View style={styles.timeBox}>
<Text style={styles.timeLabel}>Güneş</Text>
<Text style={styles.timeValue}>{vakitler.Sunrise.split(' ')[0]}</Text>
</View>

<View style={styles.timeBox}>
<Text style={styles.timeLabel}>Öglen</Text>
<Text style={styles.timeValue}>{vakitler.Dhuhr.split(' ')[0]}</Text>
</View>

<View style={styles.timeBox}>
<Text style={styles.timeLabel}>İkindi</Text>
<Text style={styles.timeValue}>{vakitler.Asr.split(' ')[0]}</Text>
</View>

<View style={styles.timeBox}>
<Text style={styles.timeLabel}>Akşam</Text>
<Text style={styles.timeValue}>{vakitler.Maghrib.split(' ')[0]}</Text>
</View>

<View style={styles.timeBox}>
<Text style={styles.timeLabel}>Yatsı</Text>
<Text style={styles.timeValue}>{vakitler.Isha.split(' ')[0]}</Text>
</View>
</View>
</View>
)}
)}
</ScrollView>
</View>
)
}

export default Calendar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', 
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EAB308', 
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1E293B', 
    borderRadius: 10,
    marginBottom: 15, 
    padding: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  cardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    paddingBottom: 5,
    marginBottom: 10,
  },
  dateText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  timesContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
  },
  timeBox: {
    alignItems: 'center', 
    padding: 2,
    minWidth: 45, 
  },
  timeLabel: {
    color: '#94A3B8',
    fontSize: 11,
    marginBottom: 2,
  },
  timeValue: {
    color: 'white', 
    fontSize: 14,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#A16207', // Altın tonu
    paddingVertical: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF', // Beyaz daha okunabilir
    fontSize: 13,
  }
});
