import styled from 'styled-components';

const colorMap = {
  funGreen: '#046B2D',
  milanoRed: '#C62A08',
  transparent: 'transparent',
};

export const Button = styled.div`
  background-color: ${({ color }) => colorMap[color]};
  width: 132px;
  height: 35px;
  border: 0;
  border-radius: 18px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-weight: 400;
  font-size: 16px;
  /* line-height: 19px; */
  padding: 0px 16px;
  gap: 8px;
`;
