export type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type AuthAction = {
  token: string | undefined;
  type: string;
};
