import { Center, HStack, Image, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import fontBoldConfig from '../config/fontBoldConfig';
import axiosRequest from '../config/request';
import { MovieListItemProps } from '../types/components';
import { useNavigation } from '@react-navigation/native';

export default function MovieListItem({ data }: MovieListItemProps) {
  const URL_REGEX =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

  const [ratings, setRatings] = useState<{ Source: string; Value: string }[]>([]);
  const [plot, setPlot] = useState('');

  const { navigate } = useNavigation();

  const handleGoToDetails = () => {
    navigate('Details', { imdbID: data.imdbID });
  };

  // Esta parte no es ofrecida en la respuesta de la peticion de la lista así que es solicitada en una petición aparte
  useEffect(() => {
    (async () => {
      const resp = await axiosRequest(`&i=${data.imdbID}&plot=short`);
      setPlot(resp.Plot !== 'N/A' ? resp.Plot : '');
      setRatings(resp.Ratings);
    })();
  }, []);

  return (
    <Pressable
      onPress={handleGoToDetails}
      $active-opacity={'$50'}
      p={'$3'}
      mb={'$3'}
      borderRadius={'$md'}
      elevation={3}
      backgroundColor="white"
      shadowOffset={{ height: 3, width: 3 }}
      shadowColor="black"
      shadowRadius={2}
      shadowOpacity={0.3}
    >
      <HStack>
        {URL_REGEX.test(data.Poster) ? (
          <Image
            source={{ uri: data.Poster }}
            borderRadius={10}
            alt={data.Poster}
            minHeight={200}
            h={'100%'}
            w={150}
          />
        ) : (
          <Center h={200} w={150} borderWidth={1} borderRadius={10}>
            <Text textAlign="center" fontSize={'$lg'} {...fontBoldConfig}>
              {'SIN\nIMAGEN\nDISPONIBLE'}
            </Text>
          </Center>
        )}
        <VStack flex={1}>
          <Text pl={'$2'} mb={'$3'} textAlign="center" {...fontBoldConfig}>
            {data.Title}
          </Text>
          <HStack pl={'$2'} mb={'$1'}>
            <Text fontSize={'$sm'} {...fontBoldConfig}>
              {'Rating: '}
            </Text>
            <Text fontSize={'$sm'} fontFamily="Urbanist-Regular">
              {ratings.length === 0 ? 'No Disponible' : ratings[0].Value}
            </Text>
          </HStack>
          <Text pl={'$2'} fontSize={'$sm'} {...fontBoldConfig}>
            {'Decripción: '}
            <Text fontSize={'$sm'} fontFamily="Urbanist-Regular">
              {plot || 'No Disponible'}
            </Text>
          </Text>
        </VStack>
      </HStack>
    </Pressable>
  );
}
