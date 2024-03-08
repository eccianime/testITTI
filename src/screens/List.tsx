import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

export default function List() {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>List</Text>
      <Button onPress={() => navigate('Details')}>
        <Text>Go To Details</Text>
      </Button>
    </View>
  );
}
