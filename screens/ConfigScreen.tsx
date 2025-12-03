import { Button, StyleSheet, Text, View } from 'react-native';
import { useSize } from '../context/Context';
import { useState } from 'react';

const ConfigScreen = () => {
  const size = useSize((state) => state.size);
  const incSize = useSize((state) => state.incSize);
  const decSize = useSize((state) => state.decSize);
  return (
    <View>
      <Text>Introduce el tamaño del tablero</Text>
      <Text>{size}</Text>
      <Button
        onPress={() => incSize()}
        title="Incrementar"
      />
      <Button
        onPress={() => decSize()}
        title="Decrementar"
      />
    </View>
  );
};

export default ConfigScreen;

const styles = StyleSheet.create({});
