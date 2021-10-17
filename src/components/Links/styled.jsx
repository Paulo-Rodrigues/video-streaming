import styled from 'styled-components';

export const StyledLinkDefault = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 1rem 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #cacaca;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const StyledLinkPrimary = styled(StyledLinkDefault)`
  color: #00a8ff;

  &:hover {
    color: #0080c0;
  }
`;
