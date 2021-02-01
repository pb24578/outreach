/* eslint-disable camelcase */
import { AuthState, CognitoUserInterface } from '@aws-amplify/ui-components';
import { Investor, BusinessOwner } from '../dashboard';

export interface CognitoUser extends CognitoUserInterface {
  attributes?: {
    email: string;
    email_verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
    sub: string;
  };
  signInUserSession?: {
    idToken: {
      jwtToken: string;
    };
  };
}

export interface Login {
  authState: AuthState;
  user: CognitoUser | undefined;
  userData: Investor | BusinessOwner | undefined;
  userLoaded: boolean;
}

export interface SetUserPayload {
  authState: AuthState;
  user: any | undefined;
  userData: Investor | BusinessOwner | undefined;
}
