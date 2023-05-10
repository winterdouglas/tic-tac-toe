import { ComponentType, HTMLAttributes, ReactNode, useMemo } from "react";
import styled from "styled-components";

import { FontConfig } from "theme";
import { bodyText, headingText } from "@/styles/mixins";
import { ElementType } from "@react-spring/web";

type Size = keyof FontConfig;

type Preset = typeof presets;

type PresetProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  size?: Size;
  children?: ReactNode;
};

export type TextProps = HTMLAttributes<HTMLElement> & {
  preset?: keyof Preset;
  renderAs?: ElementType;
};

export const Text = ({ preset, renderAs, children, ...props }: TextProps) => {
  const Component = useMemo(
    () => presets[preset || "body"],
    [preset]
  ) as ComponentType<PresetProps>;

  return (
    <Component as={renderAs} {...props}>
      {children}
    </Component>
  );
};

const customSize = (size?: Size) => {
  if (!size) return undefined;

  if (size === "body") return bodyText;
  return headingText(size);
};

const presets = {
  body: styled.span<PresetProps>`
    ${({ size }) => customSize(size)}
  `,
  hl: styled.h1<PresetProps>`
    ${headingText("hl")}
    ${({ size }) => customSize(size)}
  `,
  hm: styled.h2<PresetProps>`
    ${headingText("hm")}
    ${({ size }) => customSize(size)}
  `,
  hs: styled.h3<PresetProps>`
    ${headingText("hs")}
    ${({ size }) => customSize(size)}
  `,
  hxs: styled.h4<PresetProps>`
    ${headingText("hxs")}
    ${({ size }) => customSize(size)}
  `,
};
