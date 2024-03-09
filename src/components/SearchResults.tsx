import { Center, Spinner, Text, useToken } from '@gluestack-ui/themed';
import { FlatList } from 'react-native';
import { SearchResultsProps } from '../types/components';
import MovieListItem from './MovieListItem';
import fontBoldConfig from '../config/fontBoldConfig';

export default function SearchResults({ isLoading, data }: SearchResultsProps) {
  return isLoading ? (
    <Center flex={1}>
      <Spinner color={useToken('colors', 'success500')} size={'large'} />
      <Text textAlign="center" size="3xl" {...fontBoldConfig}>
        Cargando...
      </Text>
    </Center>
  ) : data?.length === 0 ? (
    <Center flex={1}>
      <Text textAlign="center" size="3xl" {...fontBoldConfig}>
        No hay resultados para su búsqueda
      </Text>
    </Center>
  ) : (
    <FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
      }}
      data={data}
      renderItem={({ item }) => <MovieListItem data={item} />}
    />
  );
}
