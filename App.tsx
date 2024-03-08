import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import BaseStack from './src/navigation/BaseStack';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <BaseStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
