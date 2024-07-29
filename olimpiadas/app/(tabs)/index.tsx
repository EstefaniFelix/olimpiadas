import { View, StyleSheet } from 'react-native';

import Pegar from './olimpiadas1'
import Salve from './olimpiadas2'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pegar pais="Japão" ouro="5" prata="2" bronze="4" medalhas="11" />
      <Salve pais="Brasil" ouro="0" prata="1" bronze="2" medalhas="3"  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
