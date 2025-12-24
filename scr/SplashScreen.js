import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, ImageBackground } from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
  
  return (
    <ImageBackground 
      source={require('../assets/cami.png')} 
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SplashScreen;