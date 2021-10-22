import styled from 'styled-components';

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledSlider = styled.div`
  width: 100%;
  max-width: 100%;
  height: 150px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3f4a86;

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    width: 50px;
    height: 50px;
    background-color: #3f4a86;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #3f4a86;
    }
  }

  .rightArrow {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
    width: 50px;
    height: 50px;
    background-color: #3f4a86;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #3f4a86;
    }
  }
`;
