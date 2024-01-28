import {FetchStatus} from 'shared/types/enums';

export interface UserState {
  isSignedIn: boolean | null;
  token: string | null;
  userId: string | null;
  hubConnectionState?: string;
  status?: FetchStatus;
  error: any;
  data: any;
}
