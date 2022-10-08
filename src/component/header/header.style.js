import styled from 'styled-components';

const colorMap = {
  red: '204,0,0',
  orange: '204, 128, 15',
};
export const Header = styled.div`
  background-color: ${({ color }) => `rgba(${colorMap[color]})`};
  color: white;
  width: 304px;
  text-align: center;
  /* display:flex;
  justify-content:center; */
`;
export const HeaderWrapper = styled.div`
  background-color: ${({ color }) => `rgba(${colorMap[color]}, 0.6)`};
  justify-content: center;
  display: flex;
`;
