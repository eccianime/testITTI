import { Text, VStack } from '@gluestack-ui/themed';
import fontBoldConfig from '../config/fontBoldConfig';
import { TitleAndDescriptionProps } from '../types/components';

export default function TitleAndDescription({ title, description }: TitleAndDescriptionProps) {
  return (
    <VStack mb={'$4'}>
      <Text mb={'$2'} size="md" {...fontBoldConfig} color={'$white'}>
        {title}
      </Text>
      <Text textAlign="justify" size="md" fontFamily="Urbanist-Regular" color={'$white'}>
        {description}
      </Text>
    </VStack>
  );
}
