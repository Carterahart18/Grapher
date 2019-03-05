import styled from '@emotion/styled';

import { gray, silverChalice } from '../../emotion/colors';

export const Container = styled('div')`
  display: flex;
  border: 2px solid ${gray};
  border-radius: 3px;
  width: fit-content;
  font-family: arial;
  font-size: 16px;
  letter-spacing: 1px;
  margin-right: 30px;
`;

export const Element = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  min-width: 40px;
  height: 40px;
  border: 1px solid ${silverChalice};
  font-family: arial;
  font-size: 16px;
  letter-spacing: 1px;
`;
