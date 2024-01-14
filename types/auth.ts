export type AuthStateProps = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type AuthActionProps = {
  token: string | null;
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT';
};

export type AuthContextProps = {
  signIn: () => void;
  signOut: () => void;
  signUp: () => void;
};
