import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  const [number, setNumber] = useState(0);

  function increment() {
    return setNumber(number + 1);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>
        {number}
      </Text>

      <TouchableOpacity onPress={increment}>
        <Text style={styles.text}>
          Olá mundo
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    backgroundColor: 'white',
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
