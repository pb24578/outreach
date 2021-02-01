/* eslint-disable camelcase */
import { AuthState, CognitoUserInterface } from '@aws-amplify/ui-components';
import { ChatRoom } from '../../shared/containers/chat';

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

export interface BusinessOwner {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  businessName: string;
  location: string;
  minorityOwned: boolean;
  certificate: string;
  bio: string;
  storyBio: string;
  tags: string[];
  chatRooms: { items: ChatRoom[] };
}

export interface Investor {
  id: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  location: string;
  minMaxLoan: number[];
  bio: string;
  tags: string[];
  chatRooms: { items: ChatRoom[] };
}

export const isBusinessOwner = (object: any): object is BusinessOwner =>
  object && typeof object.businessName === 'string';

export const isInvestor = (object: any): object is Investor =>
  object && object.businessName === undefined && typeof object.firstName === 'string';
