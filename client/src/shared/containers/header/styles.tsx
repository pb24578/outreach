import styled from 'styled-components';
import Dashboard from '../../../pages/dashboard';
import { FlexRow, FlexColumn, FlexCenter } from '../../styles/flex';

interface PhotoProps {
  photo: string;
}

export const HeaderWrapper = styled(FlexColumn)<PhotoProps>`
  width: 100%;
  height: 350px;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(0deg, rgba(7, 16, 19, 0.74), rgba(7, 16, 19, 0.74)), url(${(props) => props.photo});
  background-position: center;
  background-size: cover;
  margin: 0;
  padding: 0;

  & h1 {
    color: ${(props) => props.theme.colors.teritary};
    font-size: 8em;
    line-height: 0;
  }
  & h2 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 2em;
    line-height: 0;
  }
`;

export const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 10px;
  margin: 20px;
  & a {
    padding-left: 10px;
    padding-right: 10px;
    color: ${(props) => props.theme.colors.teritary};
    & :visited {
      color: ${(props) => props.theme.colors.teritary};
    }
    & :active {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const HeaderContent = styled(FlexRow)`
  width: 95%;
`;

// profile headers

export const CircularImgBig = styled.div<PhotoProps>`
  border-radius: 50%;
  min-width: 200px;
  min-height: 200px;
  background: url(${(props) => props.photo});
  background-position: center;
  background-size: 200px;
`;

export const ProfileContent = styled(FlexRow)`
  height: auto;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  & .TextInfo {
    padding-left: 20px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const DashboardVerifiedWrapper = styled(FlexRow)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

export const DashboardContent = styled(FlexColumn)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
