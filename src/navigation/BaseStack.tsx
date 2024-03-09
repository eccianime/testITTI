import { useToken } from '@gluestack-style/react';
import { createStackNavigator } from '@react-navigation/stack';
import { Details, List } from '../screens';

const { Navigator, Screen } = createStackNavigator();

export default function BaseStack() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: useToken('colors', 'white'),
        },
      }}
    >
      <Screen name="List" component={List} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
