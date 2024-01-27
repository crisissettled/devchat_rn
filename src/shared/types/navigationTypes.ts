import {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  SignIn: {post: string} | undefined;
  ChatTabs: NavigatorScreenParams<TabParamList>;
};

export type PropsSignIn = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export type PropsChatTabs = NativeStackScreenProps<
  RootStackParamList,
  'ChatTabs'
>;

export type TabParamList = {
  Chat: undefined;
  Friends: undefined;
  Profile: undefined;
};
