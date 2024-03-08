import { createStackNavigator } from '@react-navigation/stack';
import { List, Details } from '../screens';
import { useTheme } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

export default function BaseStack() {
  const { colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Screen name="List" component={List} />
      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
