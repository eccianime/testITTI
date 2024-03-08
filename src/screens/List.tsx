import { VStack } from '@gluestack-ui/themed';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, SearchForm, SearchResults } from '../components';

export default function List() {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <VStack mt={Platform.OS === 'android' ? '$3' : top} mb={bottom} px={'$4'} flex={1}>
      <Header />
      <SearchForm />
      <SearchResults />
    </VStack>
  );
}
