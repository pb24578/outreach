/* eslint-disable camelcase */
import { AuthState, CognitoUserInterface } from '@aws-amplify/ui-components';

export interface CognitoUser extends CognitoUserInterface {
  attributes?: {
    email: string;
    email_verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
    sub: string;
  };
}

export interface Login {
  authState: AuthState;
  user: CognitoUser | undefined;
}
