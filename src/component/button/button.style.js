import styled from 'styled-components';

 export const Button= styled.div`
    background-color: ${({color}) => color};
    width:132px;
    height: 40px;
    border: 1px solid;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* padding: 8px 16px; */
    gap: 8px;
  `
export const SmallButton= styled.div`
  background-color: lightblue;
  
`
