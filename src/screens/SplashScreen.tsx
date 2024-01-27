import {Text, View, ActivityIndicator} from 'react-native';

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
}

export default SplashScreen;
