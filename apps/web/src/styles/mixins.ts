import { css } from "styled-components";
import { FontConfig } from "theme";

/**
 * Follows https://www.a11yproject.com/posts/how-to-hide-content
 */
export const visuallyHidden = css`
  &:not(:focus, :active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export const headingText = (size: keyof FontConfig) => css`
  font-family: Outfit-Bold, sans-serif;
  font-size: ${({ theme }) => theme.fontSize[size]};
  letter-spacing: ${({ theme }) => theme.letterSpacing[size]};
`;

export const bodyText = css`
  font-family: Outfit-Medium, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.body};
  letter-spacing: ${({ theme }) => theme.letterSpacing.body};
`;
