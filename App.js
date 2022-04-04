import store from './store/store';
import { Provider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MainView from './components/MainView';

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 20
  };

  
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <MainView />
      </Provider>
    </PaperProvider>
  );
}
