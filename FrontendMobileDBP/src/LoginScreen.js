// src/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from './api';
import { useFonts } from 'expo-font';

const backgroundImage = require('../assets/background.jpg');

const LoginScreen = ({ navigation, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fontsLoaded] = useFonts({
    'KodeMono': require('../assets/fonts/KodeMono-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  const handleLogin = async () => {
    try {
      await login(email, password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.title, { fontFamily: 'KodeMono' }]}>Login</Text>
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={[styles.buttonText, { fontFamily: 'KodeMono' }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.registerText, { fontFamily: 'KodeMono' }]}>Don't have an account? Register</Text>
        </TouchableOpacity>
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
  registerText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default LoginScreen;
