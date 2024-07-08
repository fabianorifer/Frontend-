// src/RegisterScreen.js
import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground,ScrollView , KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { register } from './api';
import { useFonts } from 'expo-font';

const backgroundImage = require('../assets/background.jpg');

const RegisterScreen = ({navigation}) => {
  const [nombreUsuario, setUsername] = useState('');
  const [contrasena, setPassword] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  

  const [fontsLoaded] = useFonts({
    'KodeMono': require('../assets/fonts/KodeMono-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  const handleRegister = async () => {
    try {
      await register(nombreUsuario,contrasena,altura,peso, genero, email, edad);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
    >
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <Text style={[styles.title, { fontFamily: 'KodeMono' }]}>Register</Text>
            <View style={styles.inputContainer}>
              <Icon name="envelope" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Email"
                placeholderTextColor="#ddd"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Password"
                placeholderTextColor="#ddd"
                value={contrasena}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="user" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Username"
                placeholderTextColor="#ddd"
                value={nombreUsuario}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="calendar" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Edad"
                placeholderTextColor="#ddd"
                value={edad}
                onChangeText={setEdad}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="arrows-v" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Altura"
                placeholderTextColor="#ddd"
                value={altura}
                onChangeText={setAltura}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="balance-scale" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Peso"
                placeholderTextColor="#ddd"
                value={peso}
                onChangeText={setPeso}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="venus-mars" size={20} color="white" style={styles.icon} />
              <TextInput
                style={[styles.input, { fontFamily: 'KodeMono' }]}
                placeholder="Género"
                placeholderTextColor="#ddd"
                value={genero}
                onChangeText={setGenero}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={[styles.buttonText, { fontFamily: 'KodeMono' }]}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#03dac6',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: '#6200ee',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;