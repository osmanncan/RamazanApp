# 📱 İftaraKala - Ramazan İmsakiyesi

Ramazan ayı boyunca namaz vakitleri ve oruç saatleri için dinamik imsakiye sunan modern bir React Native uygulaması.

---

## 🌟 Özellikler

- ✨ **Dinamik İmsakiye** - Bulunduğunuz şehre göre otomatik namaz vakitleri
- 📍 **Konum Bazlı** - GPS kullanarak otomatik şehir tespit
- 🕌 **Beş Vakit Namaz** - Fecr, Şuruç, Öğle, İkindi, Akşam, Yatsı vakitleri
- 📅 **Ramazan Takvimi** - İslami takvim entegrasyonu
- 🌙 **Zikir Rehberi** - Ramazan zikirleri ve duaları
- ❓ **İslami Sorular** - Eğitici içerik ve bilgiler
- 🎨 **Modern Arayüz** - Gradient tasarım ve smooth animasyonlar

---

## 🛠️ Teknoloji Stack

- **Framework:** React Native 0.81
- **Navigation:** React Navigation 7.x
- **Runtime:** Expo 54
- **Konum Servisi:** Expo Location
- **Depolama:** AsyncStorage
- **UI:** React Native Linear Gradient, Vector Icons

---

## 📦 Kurulum

### Gereksinimler
- Node.js 16+
- npm veya yarn
- Expo CLI

### Adımlar

```bash
# Depoyu klonlayın
git clone https://github.com/[username]/iftarakala-ramazan.git

# Proje dizinine gidin
cd iftarakala-ramazan

# Bağımlılıkları yükleyin
npm install

# Uygulamayı başlatın
npm start
```

### Çalıştırma

```bash
# Expo üzerinde web'de
npm run web

# Android emülatörü/cihazda
npm run android

# iOS simülatörü/cihazda
npm run ios
```

---

## 📁 Proje Yapısı

```
RamazanApp/
├── scr/
│   ├── HomeScreens.js          # Ana ekran ve navigasyon
│   ├── SplashScreen.js         # Açılış ekranı
│   ├── PrayersScreens.js       # Namaz vakitleri ekranı
│   ├── Calendar.js             # Ramazan takvimi
│   ├── İslamDays.js            # İslami günler
│   ├── Zikir.js                # Zikir ve dualar
│   ├── Questions.js            # İslami sorular ve cevapları
│   └── constants.js            # Sabit değerler
├── android/                    # Android native yapılandırması
├── assets/                     # İcon ve splash görselleri
└── app.json                    # Expo yapılandırması
```

---

## 🎯 Önemli Özellikler

### 1. **Namaz Vakitleri**
- Gerçek zamanlı namaz vakitleri hesaplaması
- Konum bazlı otomatik güncelleme
- Ses bildirimleri (planlı)

### 2. **Ramazan Takvimi**
- Gün gün sahur ve iftar saatleri
- Hijri takvim gösterimi
- İslami özel günler

### 3. **Zikir ve Dualar**
- Ramazan boyunca yapılacak zikirlerin listesi
- Teravih rehberi
- Dua koleksiyonu

### 4. **Eğitici İçerik**
- İslami sorular ve cevapları
- Ramazan hakkında bilgilendirme
- Oruç etikleri rehberi

---

## 🔐 Gizlilik

Bu uygulama kişisel verilerinizi korumayı çok önemser. 
- Konumunuz yalnızca namaz vakitleri hesaplamak için kullanılır
- Hiçbir kişisel veri sunucu tarafında saklanmaz
- Tüm veriler cihazınızda yerel olarak depolanır

[Detaylı Gizlilik Politikası](./privacy-policy.html)

---

## 📱 Ekran Görüntüleri

### Ana Ekran
Namaz vakitleri, iftar saati ve devam eden gün sayacı

### İmsakiye
Ramazan ayı boyunca her gün için imsakiye tablosu

### Zikir Rehberi
Ramazan zikirleri ve önerilen dualar

---

## 🤝 Katkı

Katkılar çok hoş karşılanır! Lütfen şunları yapın:

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'e push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

---

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Detaylar için [LICENSE](./LICENSE) dosyasına bakın.

---

## 📞 İletişim

**Geliştirici:** Osmancen  
**E-mail:** [osmancann25@gmail.com]  

---

## 🙏 Teşekkürler

- React Native topluluğu
- Expo ekibi
- Tüm katkıda bulunanlar

---

**Ramazan Mübarek olsun! 🌙**

*Última Güncellenme: Aralık 2024*
