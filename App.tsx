import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { NavigationContainer } from '@react-navigation/native';
import BaseStack from './src/navigation/BaseStack';

import { Provider } from 'react-redux';
import store from './src/redux';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <NavigationContainer>
          <BaseStack />
        </NavigationContainer>
      </Provider>
    </GluestackUIProvider>
  );
}
