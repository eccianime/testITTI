import { ChevronRightIcon, Text, VStack } from '@gluestack-ui/themed';
import fontBoldConfig from '../config/fontBoldConfig';
import { TitleAndListProps } from '../types/components';

export default function TitleAndList({ title, stringList }: TitleAndListProps) {
  return (
    <VStack mb={'$4'}>
      <Text mb={'$2'} size="md" {...fontBoldConfig} color={'$white'}>
        {title}
      </Text>
      {stringList.split(',').map((item) => (
        <Text
          key={item}
          mb={'$1'}
          textAlign="justify"
          size="md"
          fontFamily="Urbanist-Regular"
          color={'$white'}
        >
          <ChevronRightIcon color="$white" size="sm" /> {item}
        </Text>
      ))}
    </VStack>
  );
}
