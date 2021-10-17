import styled from 'styled-components';
import Img from './shire.jpg';

export const StyledBanner = styled.div`
  margin: 0;
  color: #fff;
  background: rgb(20, 20, 20);
  background-image: linear-gradient(
      0deg,
      rgba(20, 20, 20, 1) 0%,
      rgba(20, 20, 20, 0) 25%,
      rgba(20, 20, 20, 0) 75%,
      rgba(20, 20, 20, 1) 100%
    ),
    url(${Img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const StyledBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 45%;
  margin-left: 4rem;
  padding-top: 5rem;
`;

export const StyledBannerTitle = styled.h1`
  font-size: 7rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const StyledBannerDescription = styled.p`
  font-size: 3rem;
  margin-top: 0;
`;

export const StyledBannerButtonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledBannerButton = styled.button`
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ffffffb3;
    color: #000;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const StyledBannerButtonSecondary = styled.button`
  background: #333333e8;
  border: 1px solid #333333e8;
  border-radius: 5px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 2rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #333333ca;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;
