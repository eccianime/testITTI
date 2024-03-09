import {
  ButtonIcon,
  Center,
  ChevronLeftIcon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TitleAndDescription } from '../components';
import TitleAndList from '../components/TitleAndList';
import fontBoldConfig from '../config/fontBoldConfig';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getMovieDetails } from '../redux/details/actions';
import { setData } from '../redux/details/slice';
import { BaseStackProps } from '../types';

export default function Details() {
  const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
  const { imdbID } = useRoute().params as BaseStackProps['Details'];
  const { goBack } = useNavigation();

  const { data } = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  const { top } = useSafeAreaInsets();
  const { width: SCREEN_WIDTH } = Dimensions.get('screen');

  useEffect(() => {
    dispatch(getMovieDetails({ imdbID }));
  }, [imdbID]);

  const handleBack = () => {
    goBack();
    dispatch(setData());
  };

  if (!data) {
    return null;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={{
        backgroundColor: 'black',
        flexGrow: 1,
        paddingTop: Platform.OS === 'android' ? 0 : top,
      }}
    >
      {URL_REGEX.test(data.Poster) ? (
        <Image
          w={'100%'}
          h={(SCREEN_WIDTH * 4) / 3}
          source={{ uri: data.Poster }}
          alt="Poster"
          mb={'$2'}
        />
      ) : (
        <Center w={'100%'} h={(SCREEN_WIDTH * 4) / 3} bg="$backgroundDarkError">
          <Text color="$white" textAlign="center" fontSize={'$3xl'} {...fontBoldConfig}>
            {'SIN\nIMAGEN\nDISPONIBLE'}
          </Text>
        </Center>
      )}
      <Pressable
        onPress={handleBack}
        $active-opacity={'$50'}
        position="absolute"
        left={'$3'}
        top={Platform.OS === 'android' ? '$3' : top + 10}
        backgroundColor="rgba(255,255,255,0.3)"
        p={'$3'}
        borderRadius={'$full'}
      >
        <ButtonIcon color="$white" size={'xl'} as={ChevronLeftIcon} />
      </Pressable>
      <VStack p={'$3'}>
        <Text mb={'$3'} textAlign="center" size="2xl" {...fontBoldConfig} color={'$white'}>
          {data.Title}
        </Text>
        <TitleAndDescription
          title="Rating:"
          description={data.Ratings.length > 0 ? data.Ratings[0].Value : 'No Informado'}
        />
        <TitleAndDescription
          title="Descripción:"
          description={data.Plot !== 'N/A' ? data.Plot : 'No Informado'}
        />
        <TitleAndDescription
          title="Director:"
          description={data.Director !== 'N/A' ? data.Director : 'No Informado'}
        />
        <TitleAndList
          title="Actores:"
          stringList={data.Actors !== 'N/A' ? data.Actors : 'No Informado'}
        />
        <TitleAndList
          title="Generos:"
          stringList={data.Genre !== 'N/A' ? data.Genre : 'No Informado'}
        />
      </VStack>
    </ScrollView>
  );
}
