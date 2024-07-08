import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Pedometer } from 'expo-sensors';
import * as ScreenOrientation from 'expo-screen-orientation';

const SensorScreen = () => {
  const [steps, setSteps] = useState(0);
  const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');

  useEffect(() => {
    const subscribeToPedometer = () => {
      Pedometer.isAvailableAsync().then(
        (result) => {
          setIsPedometerAvailable(String(result));
        },
        (error) => {
          setIsPedometerAvailable('Could not get isPedometerAvailable: ' + error);
        }
      );

      const subscription = Pedometer.watchStepCount((result) => {
        setSteps(result.steps);
      });

      return () => subscription.remove();
    };

    const subscribeToOrientationChanges = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    };

    subscribeToPedometer();
    subscribeToOrientationChanges();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pasos</Text>
      <Image source={require('../assets/walk.png')} style={styles.image} />
      <Text style={styles.stepsText}>Pasos: {steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  stepsText: {
    fontSize: 18,
  },
});

export default SensorScreen;
