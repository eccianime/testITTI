import {
  Button,
  ButtonText,
  HStack,
  Input,
  InputField,
  Text,
  useToken,
} from '@gluestack-ui/themed';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMovies } from '../redux/list/actions';

export default function SearchForm() {
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [movieYear, setMovieYear] = useState<string>('');

  const { isLoading } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(getMovies({ title: movieTitle, year: movieYear }));
  };

  const isButtonDisabled = movieTitle.length < 3 || movieYear.length < 4 || isLoading;
  const bgColor = isButtonDisabled
    ? useToken('colors', 'secondary300')
    : useToken('colors', 'success500');

  return (
    <>
      <HStack justifyContent="space-between" w={'$full'} mb={'$2'}>
        <Text size="lg" fontFamily="Urbanist-Bold">
          Ingrese el nombre:
        </Text>
        <Text size="lg" fontFamily="Urbanist-Bold">
          Ingrese el año:
        </Text>
      </HStack>
      <HStack justifyContent="space-between" w={'$full'} mb={'$2'}>
        <Input variant="rounded" size="lg" flex={2}>
          <InputField
            fontFamily="Urbanist-Regular"
            value={movieTitle}
            onChangeText={setMovieTitle}
          />
        </Input>
        <Input variant="rounded" size="lg" flex={1} ml={'$2'}>
          <InputField
            fontFamily="Urbanist-Regular"
            keyboardType="decimal-pad"
            value={movieYear}
            onChangeText={(text: string) => setMovieYear(text.replace(/\D/g, '').substring(0, 4))}
          />
        </Input>
      </HStack>
      <Button
        onPress={handleSearch}
        backgroundColor={bgColor}
        disabled={isButtonDisabled}
        w={'$full'}
        borderRadius={'$full'}
      >
        <ButtonText fontSize={'$lg'} fontFamily="Urbanist-Bold">
          {isLoading ? 'Cargando...' : 'Buscar'}
        </ButtonText>
      </Button>
    </>
  );
}
