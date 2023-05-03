import { HTMLAttributes, useMemo } from "react";
import styled from "styled-components";

import { FontConfig } from "theme";
import { bodyText, headingText } from "@/styles/mixins";

type Variant = "span" | "p" | "h1" | "h2" | "h3" | "h4";

type Size = keyof FontConfig;

type VariantProps = { size?: Size };

export type TextProps = HTMLAttributes<HTMLElement> & {
  variant?: Variant;
  size?: Size;
};

export const Text = ({
  variant = "span",
  size = "body",
  ...props
}: TextProps): JSX.Element => {
  const Element = useMemo(() => variants[variant], [variant]);

  return <Element size={size} {...props} />;
};

const customSize = (size?: Size) => {
  if (!size) return undefined;

  if (size === "body") return bodyText;
  return headingText(size);
};

const variants = {
  span: styled.span<VariantProps>`
    ${({ size }) => customSize(size)}
  `,
  p: styled.p<VariantProps>`
    ${({ size }) => customSize(size)}
  `,
  h1: styled.h1<VariantProps>`
    ${headingText("headingL")}
    ${({ size }) => customSize(size)}
  `,
  h2: styled.h2<VariantProps>`
    ${headingText("headingM")}
    ${({ size }) => customSize(size)}
  `,
  h3: styled.h3<VariantProps>`
    ${headingText("headingS")}
    ${({ size }) => customSize(size)}
  `,
  h4: styled.h4<VariantProps>`
    ${headingText("headingXS")}
    ${({ size }) => customSize(size)}
  `,
};
