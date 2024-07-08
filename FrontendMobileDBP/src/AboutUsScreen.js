// src/AboutUsScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const AboutUsScreen = () => {
  const [fontsLoaded] = useFonts({
    'KodeMono': require('../assets/fonts/KodeMono-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const teamMembers = [
    {
      name: 'José Arias',
      image: require('../assets/jose.png'),
      description: 'Soy un estudiante de Ciencias de la Computación que quiere progresar en la vida :V'
    },
    {
      name: 'Milton Cordova',
      image: require('../assets/milton.png'),
      description: 'Soy estudiante de Ciencias de la Computación que está entusiasmado a cambiar la forma de vida de los programadores.'
    },
    {
      name: 'Fabiano Rivadeneira',
      image: require('../assets/messi.png'),
      description: 'Él que apuesta por necesidad, pierde por obligación.'
    },
    {
      name: 'Cesar Carranza',
      image: require('../assets/cesar.jpg'),
      description: 'Graduado de Hardvard y Howards en nutricionismo.'
    }
  ];

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>¿Quiénes Somos?</Text>
        <Text style={styles.subtitle}>Somos un equipo dedicado a mejorar la salud y el bienestar de los programadores. Nuestro equipo está formado por expertos en nutrición, fitness y desarrollo de software.</Text>
        <View style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.card}>
              <Image source={member.image} style={styles.image} />
              <Text style={styles.name}>{member.name}</Text>
              <Text style={styles.description}>{member.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    marginVertical: 20,
    fontFamily: 'KodeMono',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'KodeMono',
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    width: 150,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'KodeMono',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'KodeMono',
  },
});

export default AboutUsScreen;
