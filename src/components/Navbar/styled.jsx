import styled from 'styled-components';
import Img from './logo.png';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: transparent;
  border-bottom: 1px solid rgb(20, 20, 20);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
`;

export const StyledLogo = styled.img.attrs({
  src: Img,
})`
  height: 2rem;
  width: auto;
  margin-right: 2rem;
  margin-left: 4rem;
`;
