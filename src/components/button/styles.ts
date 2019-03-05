import styled from '@emotion/styled';

export const Button = styled('button')`
  min-width: 100px;
  padding: 10px;
  border: 2px solid #2096df;
  border-radius: 3px;
  background-color: #68bbee; // SkyBlue
  font-family: arial;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  cursor: pointer;

  &:active {
    background-color: #1ea3f6;
  }
`;
