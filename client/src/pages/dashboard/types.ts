export interface BusinessOwner {
  id: string;
  firstName: string;
  lastName: string;
  businessName: string;
  minorityOwned: boolean;
  bio: string;
  storyBio: string;
  tags: string[];
}

export interface Investor {
  id: string;
  firstName: string;
  lastName: string;
  minMaxLoan: number[];
  bio: string;
  tags: string[];
}
