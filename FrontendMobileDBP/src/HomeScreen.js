// src/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';

const backgroundImage = require('../assets/idk.jpg');
const logoImage = require('../assets/logo2_sinfondo.png');

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'KodeMono': require('../assets/fonts/KodeMono-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AddRecipe')}>
            <LinearGradient
              colors={['#6200ee', '#8a2be2']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Agregar Receta</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DailyAdvice')}>
            <LinearGradient
              colors={['#6200ee', '#8a2be2']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Agregar Comida</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
            <LinearGradient
              colors={['#6200ee', '#8a2be2']}
              style={styles.button}
            >
              <Text style={styles.buttonText}>¿Quiénes Somos?</Text>
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
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 300, // Ajusta este valor al tamaño deseado del logo
    height: 290, // Ajusta este valor al tamaño deseado del logo
    position: 'absolute',
    top: 80, // Ajusta este valor para colocar el logo en la posición deseada
    left: 40, // Ajusta este valor para colocar el logo en la posición deseada
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 300, // Ajusta este valor para bajar los botones
  },
  button: {
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 8,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'KodeMono',
  },
});

export default HomeScreen;
