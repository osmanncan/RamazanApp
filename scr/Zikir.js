import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ZikirmatikScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    loadCount();
  }, []);

  useEffect(() => {
    saveCount(count);
  }, [count]);

  const loadCount = async () => {
    try {
      const savedCount = await AsyncStorage.getItem('zikirCount');
      if (savedCount !== null) {
        setCount(parseInt(savedCount));
      }
    } catch (error) {
      console.error('Sayaç yüklenirken hata:', error);
    }
  };

  const saveCount = async (value) => {
    try {
      await AsyncStorage.setItem('zikirCount', value.toString());
    } catch (error) {
      console.error('Sayaç kaydedilirken hata:', error);
    }
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    Vibration.vibrate(50);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    if (count > 0) Vibration.vibrate(30);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Zikirmatik</Text>
      
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.mainButton} onPress={increment} activeOpacity={0.8}>
          <Text style={styles.counterText}>{count}</Text>
        </TouchableOpacity>

        <Text style={styles.helperText}>Artırmak için daireye dokunun</Text>

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.controlButton} onPress={decrement}>
            <Ionicons name="remove-outline" size={32} color="#CBD5E1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton} onPress={reset}>
            <Ionicons name="refresh-outline" size={32} color="#CBD5E1" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ZikirmatikScreen;

const { width } = Dimensions.get('window');
const buttonSize = width * 0.7;
const counterFontSize = buttonSize / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 20,
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#EAB308',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20, // Daha az boşluk
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButton: {
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize / 2, // Tam daire olması için
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#334155',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  counterText: {
    fontSize: counterFontSize,
    fontWeight: 'bold',
    color: '#FACC15',
  },
  helperText: {
    color: '#64748B',
    marginTop: 20,
    fontSize: 15,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 40,
  },
  controlButton: {
    backgroundColor: '#334155',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center', alignItems: 'center',
  },
});