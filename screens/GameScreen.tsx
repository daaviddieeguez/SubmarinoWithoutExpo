import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tablero } from '../entities/tablero/Tablero';
import { useSize } from '../context/Context';
import { Casilla } from '../entities/tablero/Casilla';

const GameScreen = () => {
  const [haGanado, setHasGanado] = useState<boolean>(false);
  const size = useSize(state => state.size);
  const [tablero] = useState<Tablero>(new Tablero());
  const [mapa, setMapa] = useState<Casilla[]>([]);
  const [shoot, setShoot] = useState<{x: number, y: number}>();

  useEffect(() => {
    tablero.init({ size: size, trace: 3 });
    setMapa([...tablero.mapa]);
  }, [size, tablero]);

  const disparar = (x: number, y: number) => {
    const tocado = tablero.dispara(x, y);
    setHasGanado(tocado);
    setMapa(tablero.mapa);
    setShoot({x, y});
    console.log(`Disparo en: ${x} y ${y}`);
  };
  console.log(tablero.mapa.length);
  return (
    <View>
      <FlatList
        key={size}
        numColumns={size}
        data={mapa}
        renderItem={({ item }) => (
          <Button
            onPress={() => disparar(item.x, item.y)}
            title={`(${item.x}, ${item.y})`}
            color="#841584"
            accessibilityLabel="Disparar"
          />
        )}
        keyExtractor={item => item.id}
      />
      <Text>{haGanado ? 'Has ganado' : 'Agua'}</Text>
      <Text>Disparo en: {shoot?.x}, {shoot?.y}</Text>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
