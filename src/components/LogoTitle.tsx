import {Image} from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../asset/images/logo.png')}
    />
  );
}

export default LogoTitle;
