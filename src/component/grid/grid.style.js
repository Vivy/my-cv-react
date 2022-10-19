import styled from 'styled-components';

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  /* grid-template-columns: repeat(4, 1fr); */
  width: 20rem;
  margin: 0 auto;
  /* background-color: blue; */



  @media screen and (min-width: 48rem) {
    width: 48rem;
    /* grid-template-columns: repeat(8, 1fr); */
    gap: 1.25rem;
  }

  @media screen and (min-width: 80rem) {
    width: 80rem;
    /* grid-temp12ate-columns: repeat(12, 1fr); */
    gap: 1.5rem;
  }
`;

