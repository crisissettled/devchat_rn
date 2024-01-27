import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: {post: string} | undefined;
  ChatTabs: {userId: string};
};

export type PropsLogin = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type PropsChatTabs = NativeStackScreenProps<
  RootStackParamList,
  'ChatTabs'
>;
