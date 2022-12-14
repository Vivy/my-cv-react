import styled from 'styled-components';

const colorMap = {
  milanoRed: {h: 0, s: 100, l: 40 },
  funOrange: {h: 36, s: 86, l: 43},
  funBlue: {h: 220, s: 86, l: 43},
};

export const Header = styled.div`
  background-color: ${({ color = 'milanoRed'}) => `hsla(${colorMap[color].h}, ${colorMap[color].s}%, ${colorMap[color].l}%, 1)`};
  color: white;
  width: 304px;
  display: flex;
  justify-content: center;
  padding: 8px;
  font-size: ${({font}) => font}px;
`;

export const Transparent = styled.div`
  background-color: ${({ color = 'milanoRed' }) => `hsla(${colorMap[color].h}, ${colorMap[color].s}%, ${colorMap[color].l}%, 0.6)`};
  width: 100%;
  display: flex;
  justify-content: center;
`;
