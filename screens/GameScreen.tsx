import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tablero } from '../entities/tablero/Tablero';
import { useSize } from '../context/Context';
import { Casilla } from '../entities/tablero/Casilla';
import { SafeAreaView } from 'react-native-safe-area-context';

const GameScreen = () => {
  const [haGanado, setHasGanado] = useState<boolean>(false);
  const size = useSize(state => state.size);
  const [tablero] = useState<Tablero>(new Tablero());
  const [mapa, setMapa] = useState<Casilla[]>([]);
  const [shoot, setShoot] = useState<{ x: number; y: number }>();

  useEffect(() => {
    tablero.init({ size: size, trace: 3 });
    setMapa([...tablero.mapa]);
  }, [size, tablero]);

  const disparar = (x: number, y: number) => {
    const tocado = tablero.dispara(x, y);
    setHasGanado(tocado);
    setMapa(tablero.mapa);
    setShoot({ x, y });
    console.log(`Disparo en: ${x} y ${y}`);
  };
  console.log(tablero.mapa.length);
  return (
    <SafeAreaView>
      <View style={styles.contenedor}>
        <FlatList
          key={size}
          numColumns={size}
          data={mapa}
          renderItem={({ item }) => (
            <View style={styles.button}>
            <Button
              onPress={() => disparar(item.x, item.y)}
              title={''}
              color="#841584"
              accessibilityLabel="Disparar"
            />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Text>{haGanado ? 'Has ganado' : 'Agua'}</Text>
        <Text>
          Disparo en: {shoot?.x}, {shoot?.y}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 35, 
    height: 35,
    margin: 1,
  },
});
