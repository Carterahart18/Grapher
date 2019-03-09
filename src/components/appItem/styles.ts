import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { gray } from '../../emotion/colors';
import { arialBold } from '../../emotion/fonts';

interface ContainerProps {
  src?: string;
  disabled: boolean;
}

export const Container = styled('div')<ContainerProps>`
  display: flex;
  border: 2px solid ${gray};
  border-radius: 3px;
  min-width: 150px;
  min-height: 150px;
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.4;
          cursor: auto;
        `
      : css`
          &:hover {
            background-color: white;
          }
        `}
`;

export const Text = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${arialBold('16px')}
  letter-spacing: 1px;
  user-select: none;
`;
