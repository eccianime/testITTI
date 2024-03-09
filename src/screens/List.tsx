import { VStack } from '@gluestack-ui/themed';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, SearchForm, SearchResults } from '../components';
import { useAppSelector } from '../hooks/redux';

export default function List() {
  const { top, bottom } = useSafeAreaInsets();

  const { isLoading } = useAppSelector((state) => state.app);
  const { data } = useAppSelector((state) => state.list);

  return (
    <VStack mt={Platform.OS === 'android' ? '$3' : top} mb={bottom} px={'$4'} flex={1}>
      <Header />
      <SearchForm />
      <SearchResults isLoading={isLoading} data={data} />
    </VStack>
  );
}
