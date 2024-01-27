import {Text, View, ActivityIndicator} from 'react-native';

function SplashScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>processing...</Text>
      <ActivityIndicator></ActivityIndicator>
    </View>
  );
}

export default SplashScreen;
