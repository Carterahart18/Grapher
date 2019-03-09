import { css, SerializedStyles } from '@emotion/core';

const arialPartial = (fontWeight: string) => (size: string) => {
  return css`
    font-family: arial;
    font-size: ${size};
    font-weight: ${fontWeight};
  `;
};

export const arialBold = arialPartial('bold');
export const arialBolder = arialPartial('bolder');
export const arialNormal = arialPartial('normal');
export const arialLight = arialPartial('light');
