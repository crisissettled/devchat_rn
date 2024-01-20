import {ColorValue, StatusBar, StatusBarStyle} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

interface FocusAwareStatusBarProps {
  barStyle: StatusBarStyle;
  backgroundColor: ColorValue;
}

export default function FocusAwareStatusBar(props: FocusAwareStatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
