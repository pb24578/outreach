import { IState } from '../../store';

export const getBusinessOwner = `
  query GetBusinessOwner($id: ID!) {
    getBusinessOwner(id: $id) {
      id
      firstName
      lastName
      businessName
      profilePicture
      minorityOwned
      certificate
      location
      bio
      storyBio
      tags
      chatRooms {
        items {
          id
          businessOwner {
            id
            firstName
            lastName
            location
            profilePicture
            certificate
          }
          investor {
            id
            firstName
            lastName
            location
            profilePicture
          }
          messages {
            items {
              id
              senderId
              content
            }
          }
        }
      }
    }
  }
`;

export const getInvestor = `
  query GetInvestor($id: ID!) {
    getInvestor(id: $id) {
      id
      firstName
      lastName
      profilePicture
      location
      minMaxLoan
      bio
      tags
      chatRooms {
        items {
          id
          investor {
            id
            firstName
            lastName
            location
            profilePicture
          }
          businessOwner {
            id
            firstName
            lastName
            location
            profilePicture
            certificate
          }
          messages {
            items {
              id
              senderId
              content
            }
          }
        }
      }
    }
  }
`;

export const getAuthState = (state: IState) => state.login.authState;
export const getUser = (state: IState) => state.login.user;
export const getUserData = (state: IState) => state.login.userData;
export const isUserLoaded = (state: IState) => state.login.userLoaded;
