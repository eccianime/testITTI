import { Platform } from 'react-native';

export default Platform.OS === 'ios'
  ? { fontFamily: 'Urbanist-Bold', fontWeight: '800' }
  : { fontFamily: 'Urbanist-Bold' };
