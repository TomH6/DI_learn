import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>WORDLE - JUNE</Text>
      <Text>Ori - 4</Text>
      <Text>Ariel - 4</Text>
      <Text>Tom - 4</Text>
      <Text>Nati - ?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
