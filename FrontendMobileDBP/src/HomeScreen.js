import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  const [fontsLoaded] = useFonts({
    'KodeMono': require('../assets/fonts/KodeMono-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={require('../assets/idk.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Image source={require('../assets/logo2_sinfondo.png')} style={styles.logo} />
        <View style={[styles.buttonContainer, { flexDirection: isPortrait ? 'column' : 'row' }]}>
            <LinearGradient colors={['#6200ee', '#a566ff']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Agregar Receta</Text>
            </LinearGradient>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DailyAdviceScreen')}>
            <LinearGradient colors={['#6200ee', '#a566ff']} style={styles.buttonGradient}>
              <Text style={styles.buttonText}>Agregar Comida</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
    fontFamily: 'KodeMono',
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  buttonGradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'KodeMono',
  },
});

export default HomeScreen;
