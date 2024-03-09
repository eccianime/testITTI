import { Text } from '@gluestack-ui/themed';
import fontBoldConfig from '../config/fontBoldConfig';

export default function Header() {
  return (
    <Text fontSize={'$2xl'} mb={'$3'} textAlign="center" {...fontBoldConfig}>
      Buscador de Películas por OMDBAPI
    </Text>
  );
}
