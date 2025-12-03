import { Button, StyleSheet, Text, View } from 'react-native';
import { useSize } from '../context/Context';
import { useState } from 'react';

const ConfigScreen = () => {
  const size = useSize(state => state.size);
  const incSize = useSize(state => state.incSize);
  const decSize = useSize(state => state.decSize);
  return (
    <View style={styles.container}>
      <Text>Introduce el tamaño del tablero</Text>
      <Text>{size}</Text>
      <View style={styles.button}>
        <Button onPress={() => incSize()} title="Incrementar" />
      </View>
      <View style={styles.button}>
        <Button onPress={() => decSize()} title="Decrementar" />
      </View>
    </View>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 2,
    width: 250,
  },
});
