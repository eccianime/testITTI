import { FlatList } from '@gluestack-ui/themed';
import { useAppSelector } from '../hooks/redux';
import { Text } from '@gluestack-ui/themed';

export default function SearchResults() {
  const { data } = useAppSelector((state) => state.list);
  return (
    <FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      data={data}
      renderItem={({ item }) => <Text>Item</Text>}
    />
  );
}
