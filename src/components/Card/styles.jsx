import styled from 'styled-components';
import Img from './jurassic.png';

export const CardContainer = styled.div`
  width: 15em;
  height: 8em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-image: url(${Img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 5px;
`;
