import Navigation from '@/routes/routes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 2 }}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
