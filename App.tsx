import { StyleSheet } from 'react-native';
import Home from './src/screens/home/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding:4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
