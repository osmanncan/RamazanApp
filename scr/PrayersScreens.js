import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'


const DUAS = [
  {
    id: 1,
    title: "Fatiha Suresi",
    arabic: `بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمٰنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,
    turkish: `Rahmân ve Rahîm Allah'ın adıyla
Hamd, âlemlerin Rabbi Allah'a mahsustur.
O, Rahmân ve Rahîmdir.
Din gününün mâlikidir.
(Yalnız) Sana ibadet eder ve yalnız Senden yardım dileriz.
Bizi doğru yola ilet,
Nimet verdiklerinin yoluna; gazaba uğramışların ve sapmışların yoluna değil.`
  },
  {
    id: 2,
    title: "Ayet-el Kürsî",
    arabic: `اللَّهُ لَا إِلٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ`,
    turkish: `Allah, O’ndan başka hiçbir ilah yoktur; O, daima diridir, her şeyi ayakta tutandır.
O’nu ne bir uyuklama tutar ne de uyku.
Göklerde ve yerde olan her şey O’nundur.
İzni olmadan, O’nun katında kim şefaat edebilir?
O, onların önlerindekini ve arkalarındakini bilir.
O’nun ilminden, O’nun dilediği dışında hiçbir şeyi kuşatamazlar.
O’nun kürsüsü gökleri ve yeri kaplamıştır.
Onları korumak O’na ağır gelmez. O, yüce ve büyüktür.`
  },
  {
    id: 3,
    title: "İhlas Suresi",
    arabic: `بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ`,
    turkish: `Rahmân ve Rahîm Allah'ın adıyla
De ki: O, Allah birdir.
Allah sameddir (her şey O'na muhtaçtır, O hiçbir şeye muhtaç değildir).
O doğurmamış ve doğmamıştır.
Hiçbir şey O'na denk değildir.`
  },
  {
    id: 4,
    title: "Felak Suresi",
    arabic: `بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
مِنْ شَرِّ مَا خَلَقَ
وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ
وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ
وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ`,
    turkish: `Rahmân ve Rahîm Allah'ın adıyla
De ki: Yarattığı şeylerin şerrinden, karanlığı çöktüğü zaman gecenin şerrinden, düğümlere üfleyenlerin şerrinden, haset ettiği zaman hasetçinin şerrinden, sabahın Rabbine sığınırım.`
  },
  {
    id: 5,
    title: "Nâs Suresi",
    arabic: `بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ النَّاسِ
مَلِكِ النَّاسِ
إِلٰهِ النَّاسِ
مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ
الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ
مِنَ الْجِنَّةِ وَالنَّاسِ`,
    turkish: `Rahmân ve Rahîm Allah'ın adıyla
De ki: İnsanların Rabbine, insanların melikine (mutlak sahip ve hakimine), insanların ilâhına sığınırım.
O sinsi vesvesecinin şerrinden.
O ki insanların göğüslerine (kötü düşünceler) fısıldar.
Gerek cinlerden gerek insanlardan (olan bütün vesvesecilerin şerrinden Allah'a sığınırım).`
  },
  {
    id: 6,
    title: "Kevser Suresi",
    arabic: `بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ
فَصَلِّ لِرَبِّكَ وَانْحَرْ
إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ`,
    turkish: `Rahmân ve Rahîm Allah'ın adıyla
Şüphesiz biz sana Kevser'i verdik.
O Halde, Rabbin için namaz kıl, kurban kes.
Doğrusu sana buğzeden (düşmanlık eden), soyu kesik olanın ta kendisidir.`
  },
  {
    id: 7,
    title: "Fil Suresi",
    arabic: `بِسْمِ اللَّهِ الرَّحْمٰنِ الرَّحِيمِ
أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ
أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ
وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ
تَرْمِيهِمْ بِحِجَارَةٍ مِنْ سِجِّيلٍ
فَجَعَلَهُمْ كَعَصْفٍ مَأْكُولٍ`,
    turkish: `Rahmân ve Rahîm Allah'ın adıyla
Rabbinin, fil sahiplerine ne yaptığını görmedin mi?
Onların tuzaklarını boşa çıkarmadı mı?
Onların üzerine sürü sürü kuşlar gönderdi.
Onlara çamurdan sertleşmiş taşlar atıyorlardı.
Sonunda onları, yenilmiş ekin yaprağı gibi yaptı.`
  },
  {
    id: 8,
    title: "Yemek Öncesi Dua",
    arabic: `بِسْمِ اللَّهِ
اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ`,
    turkish: `Allah'ın adıyla.
Allah'ım! Bize verdiğin rızıkta bereket ihsan eyle ve bizi cehennem azabından koru.`
  },
  {
    id: 9,
    title: "Yemek Sonrası Dua",
    arabic: `الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مِنَ الْمُسْلِمِينَ`,
    turkish: `Bizi yediren, içiren ve Müslüman kılan Allah'a hamdolsun.`
  },
  {
    id: 10,
    title: "Şükür Duası",
    arabic: `اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ`,
    turkish: `Allah'ım! Benim veya yarattıklarından birinin ulaştığı her nimet, yalnız Sendendir. Senin ortağın yoktur. Hamd ve şükür Sana mahsustur.`
  },
  {
    id: 11,
    title: "Korunma Duası",
    arabic: `بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ`,
    turkish: `İsmiyle beraber yerde ve gökte hiçbir şeyin zarar veremediği Allah'ın adıyla. O, hakkıyla işiten ve her şeyi bilendir.`
  },
  {
    id: 12,
    title: "Kolaylık Duası (Rabbi Yessir)",
    arabic: `رَبِّ يَسِّرْ وَلَا تُعَسِّرْ
رَبِّ تَمِّمْ بِالْخَيْرِ`,
    turkish: `Rabbim! Kolaylaştır, zorlaştırma.
Rabbim! İşimi hayırla tamamına erdir.`
  }
];

const PrayersScreens = () => {
return (
<ScrollView style={styles.pageContainer} contentContainerStyle={{ paddingBottom: 40 }}>
<Text style={styles.pageTitle}>Dualar & Sureler</Text>
{DUAS.map((dua) => (
<View key={dua.id} style={styles.card}>
<Text style={styles.cardTitle}>{dua.title}</Text>
<View style={styles.arabicContainer}>
<Text style={styles.arabicText}>{dua.arabic}</Text>
</View>
<View style={styles.turkishContainer}>
<Text style={styles.turkishText}>{dua.turkish}</Text>
</View>
</View>
))}
</ScrollView>
)
}

export default PrayersScreens

const styles = StyleSheet.create({
  pageContainer: { flex: 1, paddingHorizontal: 16, paddingTop: 8, backgroundColor: '#0F172A' },
  pageTitle: { fontSize: 26, fontWeight: 'bold', color: '#EAB308', marginBottom: 20, textAlign: 'center' },

  card: {
    backgroundColor: '#1E293B',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#EAB308',
    shadowColor: "#EAB308",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },

  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFF', marginBottom: 12, textAlign: 'center' },

  arabicContainer: { backgroundColor: '#0F172A', padding: 12, borderRadius: 12, marginBottom: 12 },
  arabicText: { color: '#F8FAFC', fontSize: 21, lineHeight: 34, textAlign: 'right', writingDirection: 'rtl' },

  turkishContainer: { backgroundColor: '#1E293B', padding: 12, borderRadius: 12 },
  turkishText: { color: '#CBD5E1', fontSize: 15, lineHeight: 24 }
});
