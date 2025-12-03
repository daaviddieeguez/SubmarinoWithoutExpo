import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Tablero } from '../entities/tablero/Tablero';
import { useSize } from '../context/Context';
import { Casilla } from '../entities/tablero/Casilla';
import { SafeAreaView } from 'react-native-safe-area-context';

const GameScreen = () => {
  const size = useSize(state => state.size);
  const [tablero] = useState<Tablero>(new Tablero());
  const [mapa, setMapa] = useState<Casilla[]>([]);
  const [shoot, setShoot] = useState<{ x: number; y: number }>({x: 0, y: 0});
  const [mensaje, setMensaje] = useState<string>('¡A la espera!');

  useEffect(() => {
    tablero.init({ size: size, trace: 3 });
    setMapa([...tablero.mapa]);
  }, [size, tablero]);

  const disparar = (x: number, y: number) => {
    tablero.dispara(x, y);
    setMapa(tablero.mapa);
    setShoot({ x, y });

    const casillaClickada = tablero.mapa.find(item => item.x === x && item.y === y);
    let mensaje = '';
    if (casillaClickada) {
        switch (casillaClickada.estado) { 
            case 'tocado':
                mensaje = '¡Has ganado!';
                break;
            case 'humo':
                mensaje = '¡Humo!';
                break;
            case 'agua':
                mensaje = '¡Agua!';
                break;
            default:
                mensaje = 'Disparo realizado.';
        }
    }
    setMensaje(mensaje)
  };


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
        <Text>{mensaje}</Text>
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
