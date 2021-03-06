import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 15em;
  height: 8em;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  border-radius: 5px;

  &:hover {
    transition: 0.5s;
    transition-timing-function: ease-in-out;
    transform: scale(1.3);
    cursor: pointer;
    border: 3px solid #fff;
  }
`;
