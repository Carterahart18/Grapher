import styled from '@emotion/styled';
import { arialBold } from '../../emotion/fonts';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled('div')`
  ${arialBold('48px')}
  margin: 30px 0;
`;

export const Section = styled('div')`
  padding-bottom: 20px;
  border-bottom: 1px solid grey;
`;

export const SectionBody = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 900px;
`;

export const SectionHeader = styled('div')`
  margin: 20px 0;
  ${arialBold('24px')}
`;
