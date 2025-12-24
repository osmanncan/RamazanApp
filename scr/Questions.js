import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const questions = [
  { q: "Diş fırçalamak orucu bozar mı?", a: "Macun yutulmadığı sürece bozmaz ama mekruhtur." },
  { q: "Unutarak yemek veya içmek orucu bozar mı?", a: "Hayır, bozmaz. Peygamberimiz (sav), oruçlu olduğunu unutarak yiyip içen kimsenin orucunu bozmamasını söylemiştir." },
  { q: "Kusmak orucu bozar mı?", a: "Kendiliğinden gelen kusuntu orucu bozmaz. Ancak kişinin kendi isteğiyle ağız dolusu kusması orucu bozar." },
  { q: "Kan vermek orucu bozar mı?", a: "Kan vermek orucu bozmaz. Vücuda kan almak ise beslenme içerdiği için orucu bozar." },
  { q: "Banyo yapmak orucu bozar mı?", a: "Ağız ve burundan su kaçırmamak şartıyla banyo yapmak orucu bozmaz." },
  { q: "Göz damlası kullanmak orucu bozar mı?", a: "Göze damlatılan ilaç, miktar olarak çok az olup göze hapsolduğu için orucu bozmaz." },
  { q: "Sakız çiğnemek orucu bozar mı?", a: "Eğer sakız yutulmazsa orucu bozmaz, mekruhtur." },
  { q: "Sigara içmek orucu bozar mı?", a: "Evet, sigara içmek orucu kesinlikle bozar." },
  { q: "Oruçluyken rüyalanmak (ihtilam) orucu bozar mı?", a: "Oruçlu iken rüyada ihtilam olmak orucu bozmaz. Kişi sadece gusül abdesti alır." },
  { q: "Ağızdan ilaç veya vitamin almak orucu bozar mı?", a: "Miktar ve yutma durumuna göre değişir; genellikle yutulursa orucu bozar, sadece gargara veya ağızda bekletilip tükürülürse bozmaz." },
];

const Questions = () => {
return (
<ScrollView style={styles.pageContainer}>
<Text style={styles.pageTitle}>Sıkça Sorulanlar</Text>
{questions.map((item, i)=> (
<View key={i} style={styles.card}>
<View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
<Ionicons name="help-circle" size={20} color="#EAB308" />
<Text style={[styles.cardTitle, {marginLeft: 8, marginBottom: 0}]}>{item.q}</Text>
</View>
<Text style={styles.cardText}>{item.a}</Text>
</View>
))}
</ScrollView>
)
}

export default Questions

const styles = StyleSheet.create({
  pageContainer: { flex: 1, padding: 10, backgroundColor: '#0F172A' },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: '#EAB308', marginBottom: 16, textAlign: 'center' },
  cardTitle: { flex: 1, fontSize: 17, fontWeight: 'bold', color: '#FFF', marginBottom: 8 },
  cardText: { color: '#CBD5E1', lineHeight: 21, fontSize: 15 },
  card: {
    backgroundColor: '#1E293B',
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: '#EAB308',
    shadowColor: "#EAB308",
    shadowOffset: { width: -2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  divider: { height: 1, backgroundColor: '#334155', marginVertical: 8 },
})
