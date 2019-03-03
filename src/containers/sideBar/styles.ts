import styled from '@emotion/styled';
import { charade, scarpaFlow } from '../../emotion/colors';

export const Container = styled('div')`
  min-width: 300px;
  height: 100vh;
  background-color: ${charade};
  border-right: 3px solid ${scarpaFlow};
`;
