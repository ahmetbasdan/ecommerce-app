import { StyleSheet, View } from 'react-native';
import MainNavigation from './src/routers/MainNavigation';
import { QueryClient, QueryClientProvider } from 'react-query';
import FavoriteContextProvider from './src/contexts/FavoriteContext';
import BasketContextProvider from './src/contexts/BasketContext';

const queryClient = new QueryClient()

export default function App() {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <BasketContextProvider>
          <FavoriteContextProvider>
            <MainNavigation />
          </FavoriteContextProvider>
        </BasketContextProvider>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
