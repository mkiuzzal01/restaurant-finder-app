import Navigation from '@/routes/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StoreProvider from '@/services/StoreProvider';


export default function App() {
  return (
    <StoreProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 2 }}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </StoreProvider>
  );
}
