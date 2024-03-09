import {
  Box,
  Center,
  FlatList,
  HStack,
  Image,
  Spinner,
  Text,
  useToken,
} from '@gluestack-ui/themed';
import { MovieProps } from '../types';
import { SearchResultsProps } from '../types/components';
import { useCallback } from 'react';

export default function SearchResults({ isLoading, data }: SearchResultsProps) {
  return isLoading ? (
    <Center flex={1}>
      <Spinner color={useToken('colors', 'success500')} size={'large'} />
      <Text textAlign="center" size="3xl" fontFamily="Urbanist-Bold">
        Cargando...
      </Text>
    </Center>
  ) : data?.length === 0 ? (
    <Center flex={1}>
      <Text textAlign="center" size="3xl" fontFamily="Urbanist-Bold">
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
      }}
      data={data as MovieProps[]}
      renderItem={({ item }: { item: MovieProps }) => (
        <Box borderWidth={1} p={'$3'} mb={'$3'} borderRadius={'$md'}>
          <HStack>
            <Image
              source={{ uri: item.Poster }}
              borderRadius={10}
              alt={item.Poster}
              h={200}
              w={150}
            />
            <Text textAlign="right" fontFamily="Urbanist-Bold" fontWeight={'500'} flex={1}>
              {item.Title}
            </Text>
          </HStack>
        </Box>
      )}
    />
  );
}
