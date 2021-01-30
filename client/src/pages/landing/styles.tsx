import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../shared/styles/flex';

export const Wrapper = styled(FlexColumn)`
  align-items: center;

  & h3 {
    font-size: 1.75em;
    margin-block: 0.5em;
    color: ${(props) => props.theme.colors.secondary};
  }

  & a {
    color: ${(props) => props.theme.colors.primary};
    &:visited {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Header = styled(FlexRow)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  & img {
    padding-left: 20px;
  }
`;

export const NavLinks = styled.div`
  padding-right: 20px;

  & a {
    font-size: 1.5em;
    font-weight: 400;
    padding: 0 20px;
    &:visited {
      color: white;
    }
  }
`;

export const Title = styled(FlexColumn)`
  align-items: center;
  margin-bottom: 40px;

  & h1 {
    font-size: 9em;
    margin-block: 0;
  }

  & h2 {
    font-size: 3em;
    margin-block: 0;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const GetStarted = styled(FlexCenter)`
  width: 800px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 50px;

  & h2 {
    font-size: 2em;
    margin-block: 0.5em;
    margin-right: 20px;
  }

  &:hover {
    filter: saturate(1.5);
  }
`;

export const Overview = styled(FlexRow)`
  padding: 0 5%;
  padding-bottom: 50px;
  flex-direction: space-between;
  font-size: 1.5em;

  & img {
    width: 45%;
  }
`;

export const Description = styled.div`
  padding-left: 20px;
`;

export const TargetAudience = styled(FlexRow)`
  padding: 0 20px;

  & img {
    padding-right: 30px;
    width: 150px;
  }
`;

export const TeamMembersContainer = styled(FlexColumn)`
  align-items: center;
  margin-bottom: 50px;

  & h3 {
    font-size: 42px;
  }
`;

export const TeamMembersRow = styled(FlexRow)``;

export const TeamMember = styled(FlexColumn)`
  margin: 0 20px;
  align-items: center;
  font-size: 24px;

  & img {
    margin-bottom: 10px;
    width: 250px;
  }

  & a {
    &:visited {
      color: white;
    }
  }
`;
