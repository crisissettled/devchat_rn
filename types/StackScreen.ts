import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: {post: string} | undefined;
  CreatePost: {userId: string; name: string};
};

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type PropsCreatePost = NativeStackScreenProps<
  RootStackParamList,
  'CreatePost'
>;
