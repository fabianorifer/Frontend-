import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LightSensor } from 'expo-sensors';

const LightSensorScreen = () => {
  const [subscription, setSubscription] = useState(null);
  const [lightData, setLightData] = useState(null);

  useEffect(() => {
    subscribe();
    return () => {
      unsubscribe();
    };
  }, []);

  const subscribe = () => {
    setSubscription(
      LightSensor.addListener(data => {
        setLightData(data.illuminance);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensor de Luz Ambiente</Text>
      <Text style={styles.data}>
        {lightData !== null ? `Luz detectada: ${lightData.toFixed(2)} lx` : 'No se detecta luz'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  data: {
    fontSize: 18,
  },
});

export default LightSensorScreen;
