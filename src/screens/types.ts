import {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: {post: string} | undefined;
  ChatTabs: NavigatorScreenParams<TabParamList>;
  SignUp: undefined;
};

export type PropsSignIn = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type PropsChatTabs = NativeStackScreenProps<
  RootStackParamList,
  'ChatTabs'
>;

export type PropsSignUp = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export type TabParamList = {
  Chat: undefined;
  Friends: undefined;
  Profile: undefined;
};
